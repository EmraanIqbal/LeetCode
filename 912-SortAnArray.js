// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// Bubble Sort
var sortArray = function (nums) {
  let sorted;
  do {
    sorted = false;
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        sorted = true;
      }
    }
  } while (sorted);
  return nums;
};
