//  Create the XHR, intitalize the connection with open()) 
//    and send the request. This part is done for you. 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://courses.dce.harvard.edu/~cscie3/ajax.php"); 
xhr.send();

//  YOUR CODE HERE: Add a readystatechange listener function to respond to the HTTP response
// SOLUTION:
xhr.addEventListener("readystatechange", function(){
    if (this.readyState==4 && this.status==200){
        // GET THE RESPONSE
        var r = this.response;
        // PARSE THE RESPONSE FROM A STRING OF JSON TO AN OBJECT
        var rObj = JSON.parse(r);   
        // OUTPUT THE school PROPERTY
        logMessage(rObj.school);
        
        // ALL OF THIS COULD BE CONDENSED TO ONE LINE
       logMessage(JSON.parse(this.response).school);
        
        // OR PROVIDED WITH SOME ERROR CHECKING
        if (rObj && rObj.school){
            logMessage(rObj.school);
        }else{
            logMessage("'school' property not found");
        }   
    }
});



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}