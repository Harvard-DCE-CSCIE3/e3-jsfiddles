
fetch("https://learningapi.com/cscie3/ajax.php")
 // fetch() promise resolves to Response object
	.then(response => {
    if(!response.ok){
      throw new Error(response.statusText);
    }
    return response.json();
  })
// response.json() promise resolves to json object
  .then(function(json){
    console.log(".then() version");
    console.log(json);
  })    
  .catch(error => console.log('error:', error));

window.onload = async function(){
	try{
    // fetch() promise resolves to Response object
        let response = await fetch("https://learningapi.com/cscie3/ajax.php")
        if (!response.ok) throw new Error(response.statusText);
    // response.json() promise resolves to json object
        let json = await response.json();
        console.log("async/await version");
        console.log(json);
    }catch(error){
  	    console.log(error);
    }
}

