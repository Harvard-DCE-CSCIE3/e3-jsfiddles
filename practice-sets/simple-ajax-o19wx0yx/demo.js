//  YOUR CODE HERE: Use fetch() to make a request to 
//.   http://www.learningapi.com/cscie3/ajax.php. You''ll 
//.   then need to use two chained .then() methods: the first 
//.   to get body from the REqest object as json, and the second
//.   to do actually access the json data and make your call to logMessage()





// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}