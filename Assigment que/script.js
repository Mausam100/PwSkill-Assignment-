// 01. Count the occurrences.
function countWords(str) {
    const words = str.split(" ");
    const map = new Map();
  
    for (let word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  
    return map;
  }
  
  const sentence = "I am xyz. I am learning web development from PW Skills.";
  console.log(countWords(sentence));

  // 02. Only unique items are allowed.


function uniqueElements(arr) {
    return new Set(arr);
  }
  
  console.log(uniqueElements([1, 2, 2, 3, 3, 4])); // Set { 1, 2, 3, 4 }
  console.log(uniqueElements([5, 6, 7, 7, 8, 8])); // Set { 5, 6, 7, 8 }
  
  
  
  
  
  // 03. Swap the values.
  
  
  function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
  }
  
  let x = 1;
  let y = 2;
  [x, y] = swap(x, y);
  console.log(x, y);
  
  
  
  
  
  // 04. Access random elements.
  
  
  function extract(arr) {
    const [first, second, , , , last] = arr;
    return [first, second, last];
  }
  
  const array = [1, 2, 3, 4, 5, 6];
  console.log(extract(array));
  
  
  
  // 05. Min and max values.
  
  
  function maxMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr),
    };
  }
  
  const Numarray = [3, 7, 2, 9, 4, 1];
  console.log(maxMin(Numarray));
  
  
  
  // 06. Nested Objects.
  
  
  const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
  
  
  