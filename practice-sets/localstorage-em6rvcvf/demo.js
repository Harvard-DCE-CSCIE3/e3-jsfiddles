// Initialize our personInfo Object
const personInfo = {
    fname: "Bill",
    lname: "Adama",
    addr: "Galactica CIC",
    email: "N/A",
    title: "Admiral",
}

// Write the object to localStorage
const jsonPerson = JSON.stringify(personInfo);
window.localStorage.setItem("person", jsonPerson);

// Insert your code below to read the object back from localStorage,
// convert it back to an object, 
// and iterate over its properties, printing the property names and their 
// values using the logMessage() function. This last part should be
// identical to code you wrote for the previous pratice set


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
    function logMessage(msg, id) {
        if (!id) {
            id = "output";
        }
        document.getElementById(id).innerHTML += msg + "<br>";
    }
