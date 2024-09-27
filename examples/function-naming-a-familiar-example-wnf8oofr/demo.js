// The function name '$' is used 
//   by several prominent JS libraries,
//   including JQuery
//  e.g.  $(myElement)

//  Here's a simple-as-possible implementation 
//  of this function: get the element by id and return it
function $(id) {
    if (id && document.getElementById(id)) {
        return document.getElementById(id);
    }
}

// let's see the output - we'll get the innerHTML
//   property of an item from our HTML panel
//   and pass it to logMessage()
logMessage( $("firstListItem").innerHTML );



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}
