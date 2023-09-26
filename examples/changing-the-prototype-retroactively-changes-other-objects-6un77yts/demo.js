// our Person constructor
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

// Now we'll make a new object - spiderman - based on our Person
const spiderman = new Person("Peter","Parker");

/* Here we'll try to access getFullName() on spiderman. It fails,
 since there's no such property on a Person. 
 */
try{
    spiderman.getFullName();  // undefined
} catch(e){
    logMessage("Line 16: We've caught an error: " + e );   
}

// Now we create a getFullName() method on the Person prototype 
 Person.prototype.getFullName = function(){
	return this.fname + " " +  this.lname;
} 

// and try calling getFullName() again, on our pre-existing spiderman 
 logMessage("Line 25: Now it works: "+spiderman.getFullName()); 



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}
