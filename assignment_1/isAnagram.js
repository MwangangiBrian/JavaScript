// 4. Function to Check if two strings are anagrams
function isAnagram(str1, str2) {
    if (str1.length === 0 || str2.length === 0) return "";
    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");
    // compare sorted strings
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test cases
  console.log(isAnagram("Listen", "Silent"));
  console.log(isAnagram("Hello", "World"));
  