//  YOUR CODE HERE: Use fetch() to make a request to 
//.   https://dog.ceo/api/breeds/image/random 
//   You'll then need to use two chained .then() methods: the first 
//.   to get body from the Request object as json, and the second
//.   to do actually access the json data

fetch("https://dog.ceo/api/breeds/image/random")
	.then(response => {
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(function(json){
    console.log(JSON.stringify(json));
    document.getElementById("output").innerHTML = `<img src="${json.message}">`
  })    
  .catch(error => console.log('error', error));

const output = document.getElementById("output");
output.innerHTML = '';  // your code here to display the image returned from the API