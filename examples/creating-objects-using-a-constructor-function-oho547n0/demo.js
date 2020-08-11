// create an object type using a constructor function
function AddrBookEntry(f, l, a, e) {
    this.fname = f;
    this.lname = l;
    this.addr = a;
    this.email = e;

    this.personRole = "student";
    this.getFullName = function(){
                return this.fname + " " + this.lname;
    }
}

// Create two objects using the constructor
var me =  new AddrBookEntry("Larry","Bouthillier","Massachusetts","lbouthillier@fas.harvard.edu");
var you = new AddrBookEntry("Any","Student","Cambridge","astudent@fas.harvard.edu");

// Call on the objects' properties and methods
logMessage(me.fname);     	   // Larry
logMessage(me["fname"]);       // Larry
logMessage(me.getFullName());  // Larry Bouthillier
logMessage(you.getFullName()); // Excellent Student


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}