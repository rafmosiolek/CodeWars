// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
// If that value has two digits, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.
// Tests below:
// Test.assertEquals( digital_root(16), 7 )
// Test.assertEquals( digital_root(195), 6 )
// Test.assertEquals( digital_root(992), 2 )
// Test.assertEquals( digital_root(999999999999), 9 )
// Test.assertEquals( digital_root(167346), 9 )
// Test.assertEquals( digital_root(0), 0 )

function digital_root(n) {
  let result = String(n).split("").map(Number).reduce((a,b)=>a+b);
  return result > 9 ? digital_root(result) : result;
}