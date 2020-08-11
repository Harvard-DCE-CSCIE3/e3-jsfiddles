var el = document.getElementById("putItHere");

//  Create the XHR, intitalize the connection with open()) 
//    and send the request  
var xhr = new XMLHttpRequest();

// this one won't work, oddly, due to cross-domain issues
//xhr.open("GET", "http://jsfiddle.net"); 

xhr.open("GET", "http://fiddle.jshell.net"); 

// Here's an additional URL to try instead of line 10:
//xhr.open("GET", "http://courses.dce.harvard.edu/~cscie3/ajax.php"); 
xhr.send();



// This one works because in the PHP file on the server, 
//  the 'Access-Control-Allow-Origin' header has been set like so:
//  <?php header('Access-Control-Allow-Origin: *');?>


//  Add a listener function to respond to the HTTP response
xhr.addEventListener("readystatechange", function(){
//  Check here for new state and HTTP response code
//   and write the response to the DIV
    if(this.readyState == 4 && this.status == 200){
         el.innerHTML = this.response;   
    }
});
