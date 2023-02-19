// var maxArea = function (height) {
//   let result = [];
//   let empty = [];
//   let neeem = [];
//   for (let i = 0; i <= height.length - 1; i++) {
//     // for(let j = height.length-1; j > 1; j--){
//     for (let j = i + 1; j <= height.length - 1; j++) {
//       let val = height[i] > height[j] ? height[j] : height[i];
//       // console.log(val)

//       let newval = val * j;
//       result.push(j);
//       empty.push(val);
//       neeem.push(newval);
//     }
//   }
//     // console.log(result)
//   console.log(result);
//   console.log(empty);
//   console.log(neeem);
// }

// for (let i = 0; i <= height.length; i++) {

// let vari = 1;
// for (let j = i + 1; j <= height.length - 1; j++) {
//   let val = height[i] > height[j] ? height[j] : height[i];
//   let newval = val * vari;
//   value = value < newval ? newval : value;
// //   result.push(newval);
//   vari++;
// }
// }

//   let output = result.sort((a, b) => a - b);
// console.log(value)
// return value
//   return output[output.length - 1];

var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;

  let right = height.length - 1;

  while (left <= right) {
    const area = Math.min(height[left], height[right] * (right - left));
    maxArea = Math.max(maxArea, area);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
