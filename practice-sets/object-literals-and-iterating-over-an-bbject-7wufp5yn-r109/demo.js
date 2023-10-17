// Initialize our personInfo Object
const personInfo = {
    fname: "Bill",
    lname: "Adama",
    addr: "Galactica CIC",
    email: "N/A",
    //SOLUTION: ADDED TWO PROPERTIES
    rank: "Admiral",
    codename: "Husker",
}

// SOLUTION: ITERATE AND OUTPUT
for (let prop in personInfo){
    logMessage(prop + ": " + personInfo[prop]);   
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
