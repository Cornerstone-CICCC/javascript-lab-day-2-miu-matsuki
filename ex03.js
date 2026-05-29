// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
console.log(findMissingNumber([1, 2, 3, 5])); // Expected output: 4


function findMissingNumber(arr){

  for(let i = arr[0]; i < arr[arr.length -1]; i++){
    if(!arr.includes(i)){
      return i;
    }
  }
}