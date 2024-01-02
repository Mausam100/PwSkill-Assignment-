// 1. Double using callback.
function doubleArray(arr, callback) {
    const doubledArr = arr.map((num) => {
        return callback(num);
    })
    return doubledArr;
    
}

const originalArray =[1, 2, 3, 4];

function callback(num){
    return num * 2;
}
const doubleArray = doubleArray(originalArray, callback);
console.log(DoubleArray);
 
// 2. String Manipulation.

function manipulatString(inputString, callback){
    const manipulatedString = inputString.toUpperCase();
    callback(manipulatString);
}

function logString(manipulatedString){
    console.log(`The  string is - ${manipulatedString}`);
}
manipulatString("hello world", logString);

// 3. Age in Days.

const person = {
    name: "Kishan",
    lastName: "singh",
    age: 18,
};

function ageInDays(personObject, callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`;
    const ageInDays = personObject.age * 365;
    callback(fullName , ageInDays);

}
function logResult(fullName, ageInDays){
    console.log(
        `${fullName} has ${ageInDays} days old.`);
}
ageInDays(person, logResult);

// 4. Arrange in alphabetical order.

const books =[ {
   title: "the Great Gatsby",
   author: "F. Scott Fitzgerald",
   year: 1925,
},
{
    title: "to kill a mockingbird",
    author: "harper lee",
    year: 1960,
 },{
    title: "who are you",
    author: "george orwell",
    year: 1949,
 },
 {
    title: "pride and prejudice",
    author: "jane austen",
    year: 1813,
 },
 ];

 function logTitles(title){
    title.sort();
    console.log(title.join(", "));
 }

 function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
 }
 extractTitles(books, logTitles);

//  5. Greeting Promise.

function greet(name){
    return new Promise((resolve) =>{
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
}
greet("Mithun").then((message)=> console.log(message));

// 6. Fetch results asynchronously.

async function fetchData(){
    const response = await
    fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
}
fetchData();

// 7. Multiple requests.

async function getCombinedData(){
    const [data1, data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => 
        response.json()
        ),
        fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => 
        response.json()
        )
    ])
    const combinedData ={
        todo: data1,
        post: data2,
    };
    return combinedData;
}
getCombinedData().then((data)=> console.log(data));

// 8. Get Data from API and Display it on the browser console.
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error));

// 9. Error Handling
fetch("https://jsonplaceholder.typicode.com/posts/123456789").then(
    (response) => {
        if (!response.ok) {
            throw new Error(`Network response was not ok`);
        }
        return response.json();
    }
);
