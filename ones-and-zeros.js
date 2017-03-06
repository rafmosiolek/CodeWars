// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11


const binaryArrayToNumber = arr => {
  var i = 0,
      n = arr.length-1,
      num = 0;
      
  while (n >= 0) {
    num += (arr[n] * Math.pow(2, i));
    i += 1;
    n -= 1;
  }
  return num;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // Output: 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Output: 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // Output: 15
console.log(binaryArrayToNumber([1, 0, 0, 1])); // Output: 9
console.log(binaryArrayToNumber([1, 0, 1, 1])); // Output: 11
