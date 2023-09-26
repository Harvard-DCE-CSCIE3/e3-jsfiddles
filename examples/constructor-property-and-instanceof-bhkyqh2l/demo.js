// our Person constructor
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

// now we make an object from the Person object type
const superman = new Person("Clark","Kent");

// Here we see that Javascript has assigned the 
//  constructor property, which points to the 
//  constructor function itself
logMessage("Superman's constructor object:<br><code> "+superman.constructor + "</code><hr>");

// Superman is still an Object - remember that there's
//  no real class-type inheritance in Javascript
logMessage("Superman is an: "+ typeof superman);

// But because of the 'constructor' property, Javascript can
//  tell us that superman is an 'instanceof' Person
logMessage("Superman <code>instanceof</code> "+superman.constructor.name+": "+ (superman instanceof Person));



// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}
