// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"

function convertToCamelCase(str){

  // make "_" to " " and  sprit " "
  str = str.split("_").join(" ").split(" ");

  let output = str.map((word, index) => {
      if (index !== 0) {
        return word[0].toUpperCase() + word.slice(1);   
      }
      return word;   
    });
    return output.join("");
  }
