// 7. Function to Longest common prefix in an array
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    // loop through the array and find the longest common prefix
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
  }
  
    return prefix;
  }
  
  // Test cases
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate']));
  console.log(longestCommonPrefix(['apple', 'banana', 'cherry']));
  
  