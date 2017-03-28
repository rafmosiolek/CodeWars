/*
Description:

Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
*/

function reverseWords(str) {
  var splitedStr = str.split(" ");

  var reversed = splitedStr.map(function(string){
    return string.split("").reverse().join("");
  })
  
  var newStr = reversed.join(" ");
  
  return newStr;
}