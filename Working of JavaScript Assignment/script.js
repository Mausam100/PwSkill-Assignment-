/**01. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call
the function before it is declared to demonstrate hoisting. */
console.log(addNumbers(5, 10));
function addNumbers(num1, num2) {
  return num1 + num2;
}

/**02. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their
product. Use function expressions to define the function and call the function before it is declared to
demonstrate hoisting. */
const multiplyNumbers = (function () {
  const multiplyFunction = function (x, y) {
    return x * y;
  };
  // Call the function before it is declared to demonstrate hoisting
  console.log(multiplyFunction(4, 7));
  return multiplyFunction;
})();
/**03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
the function using the var keyword and log its value to the console before it is assigned a value to
demonstrate variable hoisting. */
function addNumbers(num1, num2){
    console.log(sumVar);
    var sumVar = num1 + num2;
    return sumVar;
}
// Call the function with 3 and 6 to demonstrate variable hoisting
console.log(addNumbers(3, 6));


/** 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting.*/
if(true)
{
  console.log(v1);
  console.log(v2); 
  console.log(v3);
  var v1 =10;
  let v2=20;
  const v3=30;
  console.log(v1);
  console.log(v2); 
  console.log(v3); 
}



 
    

/**05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone. */
if(true)
{
  console.log(x);
  let x= "hello";
  console.log(x);
}


