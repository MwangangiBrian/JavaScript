// 5. Function to Remove duplicate characters in a string

function removeDuplicates(str) {
    if (str.length === 0) return "";
    str = str.toLowerCase().replaceAll(" ", "").split("");
    let result = [];
    // Loop through string and add unique characters
    for (let i = 0; i < str.length; i++) {
      if (!result.includes(str[i])) {
        result.push(str[i]);
      }
    }
    result = result.join("");
    return result;
  }
  
  // Test cases
  console.log(removeDuplicates("programming"));
  console.log(removeDuplicates("Hello World!"));
  console.log(removeDuplicates('aaaaa'));
  console.log(removeDuplicates('abcd'));
  console.log(removeDuplicates('aabbcc'));
  