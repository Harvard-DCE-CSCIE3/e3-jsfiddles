const myPerson = {
    fname: "Sherlock",
    lname: "Holmes",
    addr: "221B Baker St",
    email: "holmes@HolmesAndWatson.org",
    2 : "two more",
    "person-role" : "investigator",  // must use quotes, else this looks like subtraction
}

const propertyname = 'fname';

logMessage(myPerson.fname); // Sherlock
logMessage(myPerson.lname); // Holmes
//logMessage(myPerson.2);     // oh-oh! can't access numeric properties with dot notation
//logMessage(myPerson.person-role);  // oh-oh! Looks like math!
//logMessage(myPerson.propertyname);  // oh-oh! No such property!

logMessage(myPerson["fname"]); // Sherlock
logMessage(myPerson["lname"]); // Holmes
logMessage(myPerson["2"]);     // two-more
logMessage(myPerson["person-role"]);     // investigator
logMessage(myPerson[propertyname]);     // Sherlock:  Argument inside brackets must be a string, and propertyname is a string  



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}
