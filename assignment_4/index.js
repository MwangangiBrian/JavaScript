// 1. listing all properties of an object
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

const objProperties = (obj) => {
  return console.log(`Properties of the object:`, Object.keys(obj).join(","))
}
objProperties(student);


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
const listAndDelete = (obj) => {
  console.log("Before deleting rollno property:", obj);
  delete student.rollno;
  console.log("After deleting rollno property:", obj);
}

listAndDelete(student);


// 3. Write a JavaScript program to get the length of a JavaScript object.

const getObjectLength = (obj) => {
  return Object.keys(obj).length;
};

console.log("Length of the student object:", getObjectLength(student));


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
];

const displayReadingStatus = (library) => {
  library.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
  });
};

displayReadingStatus(library);


// 7. Write a JavaScript program that returns a subset of a string.
const getSubsets = (str) => {
  let subsets = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subsets.push(str.slice(i, j));
    }
  }
  return subsets;
};

let sampleData = "dog";
console.log("Subsets of the string:", getSubsets(sampleData));


// 10. Write a JavaScript program to sort an array of JavaScript objects.

const sortLibraryByID = (library) => {
  return library.sort((a, b) => b.libraryID - a.libraryID);
};
// Sort and print the library array
console.log("Sorted library by libraryID:", sortLibraryByID(library));



// 11. Write a JavaScript function to print all the methods in a JavaScript object.
const all_properties = (obj) => {
  return Object.getOwnPropertyNames(obj).filter(property => typeof obj[property] === 'function');
};

// Test Data
console.log("Methods in the object:", all_properties(Array));


// 12. Write a JavaScript function to parse an URL.
const parseURL = (url) => {
  const parsedURL = new URL(url);
  return {
    href: parsedURL.href,
    protocol: parsedURL.protocol,
    host: parsedURL.host,
    hostname: parsedURL.hostname,
    port: parsedURL.port,
    pathname: parsedURL.pathname,
    search: parsedURL.search,
    hash: parsedURL.hash,
    origin: parsedURL.origin
  };
};

// Test Data
const url = "https://www.youtube.com";
console.log("Parsed URL:", parseURL(url));


// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
const getAllPropertyNames = (obj) => {
  let properties = [];
  for (let prop in obj) {
    properties.push(prop);
  }
  return properties;
};

// Test Data
const obj1 = { a: 1, b: 2 };
console.log("All property names:", getAllPropertyNames(obj1));


// 14. Write a JavaScript function to retrieve all the values of an object's properties.

const getAllPropertyValues = (obj) => {
  return Object.values(obj);
};

// Test Data
const obj2 = { a: 1, b: 2, c: 3 };
console.log("All property values:", getAllPropertyValues(obj2));


// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
const objectToPairs = (obj) => {
  return Object.entries(obj);
};

// Test Data
const obj3 = { a: 1, b: 2, c: 3 };
console.log("Object to pairs:", objectToPairs(obj3));


// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
const invertObject = (obj) => {
  let invertedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      invertedObj[obj[key]] = key;
    }
  }
  return invertedObj;
};

// Test Data
const obj4 = { a: 1, b: 2, c: 3 };
console.log("Inverted object:", invertObject(obj4));


// 17. Write a JavaScript function to check whether an object contains a given property.
const hasProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};

// Test Data
const obj5 = { a: 1, b: 2, c: 3 };
console.log("Has property 'b':", hasProperty(obj5, 'b'));
console.log("Has property 'd':", hasProperty(obj5, 'd'));