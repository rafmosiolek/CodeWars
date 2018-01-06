// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !


// my solution
function pigIt(str){
  let arr = str.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let first = el.slice(0,1);
    result.push(el.slice(1) + first + "ay");
  }
  return result.join(" ");
}

//better practice:
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}