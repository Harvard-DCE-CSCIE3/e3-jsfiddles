var myFavoritePets = ["dog","cat","kangaroo","whale"];

// We'll use Array.join() to create a string 
//  containing the array elements (delimited by
//  HMTL, in this case).
var bigString = myFavoritePets.join("<br>");
console.log(bigString);
logMessage(bigString + " is a " + typeof bigString);

logMessage("<hr>");

// Now we use String.split() to go the other way
//  from a string to an array
var newPetsArray = bigString.split("<br>");
console.log(newPetsArray);
logMessage(newPetsArray + " is a " + typeof newPetsArray) ;
logMessage("Specifically, newPetsArray is an " + newPetsArray.constructor.name);



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}