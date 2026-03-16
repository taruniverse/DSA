// Question 1 - 643. Maximum Average Subarray I/Average of Subarray of Size K

var findMaxAverage = function (nums, k) {
  if (nums.length == 1) return nums / k;
  let low = 0,
    high = 0;
  let sum = 0;
  let maxSum = -Infinity;
  while (high < nums.length) {
    sum += nums[high];
    if (high - low + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum = sum - nums[low];
      low++;
    }
    high++;
  }

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

// Question 2 - 1423. Maximum Points You Can Obtain from Cards
var maxScore = function (cardPoints, k) {
  let n = cardPoints.length;

  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += cardPoints[i];
  }

  let windowSize = n - k;

  if (windowSize === 0) return totalSum;

  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += cardPoints[i];
  }

  let minWindowSum = windowSum;

  for (let i = windowSize; i < n; i++) {
    windowSum += cardPoints[i];
    windowSum -= cardPoints[i - windowSize];
    minWindowSum = Math.min(minWindowSum, windowSum);
  }

  return totalSum - minWindowSum;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
