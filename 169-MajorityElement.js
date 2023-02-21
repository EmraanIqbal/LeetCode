// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let empty = [];
  nums.sort((a, b) => a - b);
  let maxCount = 0;
  let index = -1;

  for (let i = 0; i <= nums.length - 1; i++) {
    let count = 0;
    for (let j = 0; j <= nums.length - 1; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        index = i;
      }
    }
  }

  if (maxCount > nums.length / 2) {
    return nums[index];
  }
};
