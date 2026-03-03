// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function (s) {
  const count = new Map();
  for (let i = 0; i < s.length; i++) {
    if (count.has(s[i])) {
      count.set(s[i], -1);
    } else {
      count.set(s[i], i);
    }
  }

  let minIndex = Infinity;
  for (let value of count.values()) {
    if (value !== -1) {
      minIndex = Math.min(minIndex, value);
    }
  }
  return minIndex == Infinity ? -1 : minIndex;
};

console.log(firstUniqChar("leetcode"));
