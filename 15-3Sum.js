/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const numbers = nums.sort((a, b) => a - b);
  let empty = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (i > 0 && numbers[i - 1] === numbers[i]) {
      continue;
    }
    let left = i + 1;
    let right = numbers.length - 1;
    while (left < right) {
      const sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        empty.push([numbers[i], numbers[left], numbers[right]]);
        left++;
        while (numbers[left] === numbers[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  console.log(empty);
  return empty;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
