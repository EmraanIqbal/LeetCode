// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// var compress = function (chars) {
//   let set = [...new Set(chars)];
//   let arr = [];
//   for (let i = 0; i <= set.length - 1; i = i + 1) {
//     let count = 0;
//     arr.push(set[i]);
//     for (let j = 0; j <= chars.length; j++) {
//       if (set[i] === chars[j]) {
//         count++;
//       }
//     }
//     arr.push(count);
//     // set[i+1] = count
//   }
//   chars = [...arr];
//   console.log(chars);
//   return chars.length;
// };

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let count = 0;
    let curr = chars[j];
    while (j < chars.length && chars[j] === curr) {
      j++;
      count++;
    }
    chars[i++] = curr;
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit;
      }
    }
  }
  return i;
};

let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));

// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
var compress = function (chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[index++] = chars[i];
    if (j - i > 1) {
      let count = j - i;
      for (let digit of count.toString()) {
        chars[index++] = digit;
      }
    }
    i = j;
  }
  return index;
};
