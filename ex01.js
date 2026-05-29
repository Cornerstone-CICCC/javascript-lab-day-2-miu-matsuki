// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".



console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
console.log(capitalizeWords("hello  world")); // Expected output: "Hello  World"


//split

function capitalizeWords(str){
 let array = [];
 let output = [];

 // split
 array =  str.split(" ");

 //change only first char 
 array.forEach(char => {
  output.push(char ? char[0].toUpperCase() + char.slice(1) : char);
 }
);
return  output.join(" ")
}


// function capitalizeWords(str){
//   return str
//   .split(" ")
//   .map((word)=> word ? word[0].toUpperCase() + word.slice(1): "")
//   .join(" ");
// }
