// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
console.log(getQueryParams("https://shop.com?item=apple&price=100&id=999"));
// output: { item: "apple", price: "100", id: "999" }


function getQueryParams(url){
  let url_para = url.split("?")[1];
  //console.log(url) //search=test&page=2

  let para =  url_para.split("&");
  //console.log(para) [ 'item=apple', 'price=100', 'id=999' ]

 let output = {} 
  for(let i=0; i<para.length; i++){
    let divied = para[i].split("=");
    output[divied[0]] = divied[1] ;//{ search: "test", page: "2" }
    //console.log(divied) ;
  }

  return output;
}