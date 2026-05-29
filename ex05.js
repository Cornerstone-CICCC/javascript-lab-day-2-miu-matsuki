// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

console.log(countConsonants("hello world")); // Expected output: 7
console.log(countConsonants("hello worldaaaawww")); // Expected output: 10

function countConsonants(str){
  let consonants = ["a","e","i","o","u"];
  let cntCon = 0;
  //console.log(str.split(""));

  return str.split("")
  .filter((char)=> !consonants.includes(char) && char !== " ").length;

}