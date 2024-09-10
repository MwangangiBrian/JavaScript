// 6. Function to Count Palindromes in a string (more work)

function countPalindromes(str) {
    if (str.length === 0) return "";
    str = str.toLowerCase();
    let palindromes = new Set(); 
  
      for (let i = 0; i < str.length; i++) {
      // Check for odd-length palindromes (single character center)
      let left = i, right = i;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        palindromes.add(str.slice(left, right + 1));
        left--;
        right++;
      }
  
      // Check for even-length palindromes (two character center)
      left = i;
      right = i + 1;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        palindromes.add(str.slice(left, right + 1));
        left--;
        right++;
      }
    }
  
    return palindromes.size;
  }
  
  // Test cases
  console.log(countPalindromes("ababa"));
  console.log(countPalindromes("racecar"));
  console.log(countPalindromes("a"));
  console.log(countPalindromes("abc"));