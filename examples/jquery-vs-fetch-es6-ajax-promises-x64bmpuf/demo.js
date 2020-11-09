// open the console to see the output
// jQuery AJAX
$.getJSON("https://learningapi.com/cscie3/ajax.php")
	.done(function(r){
  	console.log("completed successfully!");
    console.log(r);
  })
  .fail(function(){
  	console.log("failed!");
  })
  .always(function(){
  	console.log("all done with jquery...");  
  });
  
  // ES6 fetch AJAX
  fetch('https://learningapi.com/cscie3/ajax.php')
  .then(function(response) {
    console.log("completed fetch successfully!");
    return response.json();
  }).then(function(json) {
    console.log(json);
  })
 .catch(function(e){
  	console.log(e);
  })
 
  
