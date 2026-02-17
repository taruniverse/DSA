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
  const temp = [];

  //
  // while (left <= right) {
  //   // console.log(s[left], s[right]);

  //   if (temp.length <= s.length) {
  //     temp.push(s[right]);
  //     console.log(s[left]);
  //     left++;
  //   } else if (temp.length < s.length) {
  //     right--;
  //   }
  // }
  // return temp;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
