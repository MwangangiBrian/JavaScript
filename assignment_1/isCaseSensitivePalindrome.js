// 8. function to check if a string is a palindrome( case insensitive )

function isCaseSensitivePalindrome(str) {
    if(str.length === 0) return "";
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let str2 = str.split("").reverse().join("");
    // compare strings
    if(str === str2) {
      return true;
    }else{
      return false;
    }
  }
  
  // Test cases
  console.log(isCaseSensitivePalindrome("Aba"));
  console.log(isCaseSensitivePalindrome("Racecar"));
  console.log(isCaseSensitivePalindrome("Hello"));
  console.log(isCaseSensitivePalindrome('Madam'));
  console.log(isCaseSensitivePalindrome('Hello'));
  