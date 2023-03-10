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
// var sortArray = function (nums) {
//   let sorted;
//   do {
//     sorted = false;
//     for (let i = 0; i <= nums.length; i++) {
//       if (nums[i] > nums[i + 1]) {
//         let temp = nums[i + 1];
//         nums[i + 1] = nums[i];
//         nums[i] = temp;
//         sorted = true;
//       }
//     }
//   } while (sorted);
//   return nums;
// };

// Merge Sort ALgorithm
var sortArray = function (nums) {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  return merge(sortArray(left), sortArray(right));
};
let merge = (left, right) => {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
};

// let nums = [5,2,3,1];
let nums = [5, 1, 1, 2, 0, 0];
console.log(sortArray(nums));
