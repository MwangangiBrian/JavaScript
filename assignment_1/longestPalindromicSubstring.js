// 3. function to find longest palindromic substring

function longestPalindromicSubstring(s) {
  if (s.length === 0) return "";

  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindromes (single character center)
      let left = i, right = i;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left > end - start) {
              start = left;
              end = right;
          }
          left--;
          right++;
      }

      // Check for even-length palindromes (two characters center)
      left = i;
      right = i + 1;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          if (right - left > end - start) {
              start = left;
              end = right;
          }
          left--;
          right++;
      }
  }

  return s.substring(start, end + 1);
}

// Test cases
console.log(longestPalindromicSubstring("babad"));
console.log(longestPalindromicSubstring("cbbd"));
