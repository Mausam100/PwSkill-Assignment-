// 1. Type Conversion.

function convertToNumber(str) {
  try {
    const num = Number(str);
    if (Number.isNaN(num)) {
      throw new Error("Invalid number");
    }
    return num;
  } catch (error) {
    return error.message;
  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

// 2. Building Robust Functions in JavaScript

function getPerson(person) {
  try {
    if (typeof person !== "object" || !person.name || !person.age) {
      throw new Error("Invalid parameter type");
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

// Expected Output
console.log(getPerson({ name: "Mithun", age: 20 }));
console.log(getPerson({ name: "Mithun" }));
console.log(getPerson(["name", "Mithun"]));

// 3. Car Description Class.

class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}.`;
  }
}

const myCar = new Car("Skoda", "Rapid", 2022);

console.log(myCar.getDescription());

// 4. Employee Class Challenge.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("Prabir Kumar", "Software Engineer", 80000);

// Expected Output
console.log(employee1.getSalary()); // Output: 80000

//   5. Implementing a Person Class with Default Values

class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Expected Output

const person1 = new Person("Mithun", 20);
console.log(person1.getDetails()); // Output: "Name: Mithun, Age: 20"

const person2 = new Person();
console.log(person2.getDetails()); // Output: "Name: Unknown, Age: 0"

//   6. Using Static Method to Add Two Numbers with Calculator Class

class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

const result = Calculator.add(5, 10);

// Expected Output:
console.log(result); // Output: 15

//   7. Password Checker.

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    return this.password.replace(/./g, "*");
  }

  setPassword(newPassword) {
    let containsNumber = false;
    let containsUppercase = false;
    for (let i = 0; i < newPassword.length; i++) {
      const char = newPassword.charAt(i);
      if (!isNaN(char)) {
        containsNumber = true;
      } else if (char === char.toUpperCase()) {
        containsUppercase = true;
      }
    }
    if (newPassword.length >= 8 && containsNumber && containsUppercase) {
      this.password = newPassword;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}

// Expected output:
const user = new User("johndoe", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword");
user.setPassword("MyPassword");
user.setPassword("Mypassword123");
console.log(user.getPassword());

// 8. Adding a Method to a Prototype.

function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Expected Output

const student = new Student("Mithun");
student.printDetails();

//   9. Check the presence using closures.

function numberChecker(numbers) {
  return function (num) {
    return numbers.includes(num);
  };
}

// Expected Result:
const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);

console.log(checkNum(3)); // true
console.log(checkNum(6)); // false

//   10. Filter by Category.

function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}

var products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
// Output: [{name: "Shirt", category: "Clothing"}, {name: "Pants", category: "Clothing"}]
