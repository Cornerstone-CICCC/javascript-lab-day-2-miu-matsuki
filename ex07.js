// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false


function validateEmail(address){
//①confirm to "@" 
//②confirm to "." after @
return address.includes("@")&& address.split("@")[1].includes(".");
}


// function validateEmail(address){
// //①confirm to "@" 
// //②confirm to "."
// const judge = address.includes("@")&& address.split("@")[1].includes(".") ?  true : false;
// return judge;
// }

// if(address.includes("@")&& address.split("@")[1].includes(".")){
//   return true;
// }
//   return false;
// }
