// Description:

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// reverse('Hello World') === 'World Hello'
// reverse('Hi There.') === 'There. Hi'
// Happy coding!

function reverse(string){
  var oldArray = string.split(" ");
  var newArray = oldArray.reverse();
  return newArray.join(" ");
}