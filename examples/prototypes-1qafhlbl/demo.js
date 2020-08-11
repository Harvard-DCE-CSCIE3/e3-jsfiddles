// our Person constructor
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

/* If I add a method to its prototype, that method is accessible 
 *   just like it's a property defined in the constructor function
 */

//  Here I assign a method to the Person prototype 
Person.prototype.getFullName = function(){
	return this.fname + " " + this.lname;
}
//  And here I can access it on an object created from Person
var superman = new Person("Clark","Kent");
logMessage("fullname: "+ superman.getFullName());  // Clark Kent


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}