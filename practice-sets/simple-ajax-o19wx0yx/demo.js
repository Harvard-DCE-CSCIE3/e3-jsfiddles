//  Create the XHR, intitalize the connection with open()) 
//    and send the request. This part is done for you. 
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.learningapi.com/cscie3/ajax.php"); 
xhr.send();

//  YOUR CODE HERE: Add a readystatechange listener function to respond to the HTTP response


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}