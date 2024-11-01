// for convenience, prevent the form from making an HTTP request on submit
document.getElementById("theForm").onsubmit = (e) => e.preventDefault(); 

/* The above would look like this if done with a 
 *   regular function in place of the arrow function:
 * 
 *   document.getElementById("theForm").onsubmit = function(e){
 *      e.preventDefault();
 *   }
 */ 