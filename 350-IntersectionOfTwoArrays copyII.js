// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2, 2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result.push(nums1[i]);
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }
  return result;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// console.log(intersect([1, 2, 2, 1], [1, 2]));
