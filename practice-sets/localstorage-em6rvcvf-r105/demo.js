// Initialize our personInfo Object
var personInfo = {
    fname: "Bill",
    lname: "Adama",
    addr: "Galactica CIC",
    email: "N/A",
    title: "Admiral",
}

// Write the object to localStorage
var jsonPerson = JSON.stringify(personInfo);
window.localStorage.setItem("person", jsonPerson);

// Insert your code below to read the object back from localStorage,
// convert it back to an object, 
// and iterate over its properties, printing the property names and their 
// values using the logMessage() function. This last part should be
// identical to code you wrote for the previous pratice set

// SOLUTION get the tiem from localStorage, parse it to
//  convert from String to Object, and then iterate over  
//  its properties and output to the page using logMessage():
var jsonFromLocalStorage = localStorage.getItem("person");
var objectFromLocalStorage = JSON.parse(jsonFromLocalStorage);
for (var prop in objectFromLocalStorage){
    logMessage(prop + ": " + objectFromLocalStorage[prop]);
}

// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
    function logMessage(msg, id) {
        if (!id) {
            id = "output";
        }
        document.getElementById(id).innerHTML += msg + "<br>";
    }