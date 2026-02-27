// question 1 -167. Two Sum II - Input Array Is Sorted
// answer 1
var twoSum = function (numbers, target) {
  const left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum == target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

// answer 2
var twoSumMethodNew = function (numbers, target) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i];
    if (map.has(compliment)) {
      return [map.get(compliment, i), i + 1];
    } else {
      map.set(numbers[i], i + 1);
    }
  }
};
console.log(twoSumMethodNew([2, 7, 11, 15], 9));
console.log(twoSum([0, 0, 3, 4], 0));

// question 2 - 344. Reverse String
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = "";
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

// question 3 - 977. Squares of a Sorted Array
var sortedSquares = function (nums) {
  let n = nums.length;
  let result = new Array(n);

  let left = 0;
  let right = n - 1;
  let position = n - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[position] = nums[left] * nums[left];
      left++;
    } else {
      result[position] = nums[right] * nums[right];
      right--;
    }
    position--;
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// Question 4 - Remove Duplicates from Sorted Array
var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
console.log(removeDuplicates([1, 1, 2]));

// Question 5 - 27. Remove Element
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let k = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[k] = nums[j];
      k++;
    }
  }
  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));

// Question 6 - 283. Move Zeroes
var moveZeroes = function (nums) {
  if (nums.length === 0) return nums;
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let j = k; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// Question 7 - 141. Linked List Cycle
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hasCycle(node1)); // true

// Question 8 - 876. Middle of the Linked List
var middleNode = function (midHead) {
  let slow = midHead;
  let fast = midHead;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Question 9 - 242. Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
};

console.log(isAnagram("anagram", "nagaram"));
