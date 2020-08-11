// create an object type using a constructor function
function AddrBookEntry(f, l, a, e, r) {
    var personRole = r;
    
    this.fname = f;
    this.lname = l;
    this.addr = a;
    this.email = e;
    
    this.getFullName = function(){
         return this.fname + " " + this.lname;
    }
    this.getPersonRole = function(){
         return personRole;   
    }
}

// Create an object using the constructor
var you = new AddrBookEntry("Excellent","Student","Cambridge","estudent@fas.harvard.edu", "student");

// Call on the objects' properties and methods
logMessage(you.fname);     	     // Excellent
logMessage(you.personRole);      // private, and therefore undefined
logMessage(you.getPersonRole()); // student

// Now let's have some fun
you.personRole = "jester";      // this creates a new property, personRole
logMessage(you.personRole);     // we can access this property
logMessage(you.getPersonRole());// but the private variable is still 'student'

// Utility function for logging convenience
// Logs 'msg' to the element with provided 'id'
// If 'id' is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}