const el = document.getElementById("output");

fetch("https://learningapi.com/cscie3/ajax.php")
	.then(response => {
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then(function(json){
    console.log(json);
  })    
  .catch(error => console.log('error', error));




