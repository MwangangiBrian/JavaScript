// 1. function to check if a string is a palindrome
function isPalindrome(str) {
  if (str.length === 0) return "";
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let str2 = str.split("").reverse().join("");
  // compare strings
  if (str === str2) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal. Panama!"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("Hello World!"));
