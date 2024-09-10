// 2. function to reverse a string

function reverseString(str) {
    if (str.length === 0) return ""; 
    str = str.split("").reverse().join("");
    return str;
  }
  
  // Test cases
  console.log(reverseString("panaram"));
  console.log(reverseString("hello"));