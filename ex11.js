// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2


function countWordOccurrences(message, keyword){

  const str = message.split(" ");

  return str.filter((word)=> word === keyword).length;

//   console.log(str);
//   let cnt = 0;
//   str.map((word)=> word === keyword? cnt+=1 : cnt)

// return cnt;
}