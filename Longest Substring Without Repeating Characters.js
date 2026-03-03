// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let maxlength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxlength = Math.max(maxlength, right - left + 1);
  }
  console.log(maxlength);
  return maxlength;
};

lengthOfLongestSubstring("abcabcbb");

// another way using map
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    // right  = a
    // left = 0
    // map.has(a) && map.get(a) >= left(0) is false
    // it went to map.set(char(a), right(0)) it will set the current char with index like 0
    // after this map.has(b) && map.get(b) >= 1 is false
    // map.set(b, 1);
    // map.has(c) && map.get(c) >= left(2) is false;
    // map.set(c, 2);
    // map.has(a) && map.get(a) >= left(0) is true;
    // left = map.get(a) + 1 then left became = 1;

    // if character seen AND inside current window
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    map.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// using map FAANG Style answer -> I use a variable sliding window with a hash map to store the last seen index of each character. When a duplicate appears inside the window, I move the left pointer to one position after the last occurrence. This ensures each character is processed once, giving O(n) time complexity.”
