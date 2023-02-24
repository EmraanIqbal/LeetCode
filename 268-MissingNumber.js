/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const lengthOfArray = nums.length;
  const formula = (lengthOfArray * (lengthOfArray + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return formula - sum;
};
