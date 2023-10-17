// This function is a simple contructor function using properties assigned using the 
//   'this' keyword. 
function SimpleAddrBookEntry(f, l, a, e) {
    this.fname = f;
    this.lname = l;
    this.addr = a;
    this.email = e;

    this.personRole = "student";
    this.getFullName = function(){
                return this.fname + " " + this.lname;
    }
}
const entry1 = new SimpleAddrBookEntry("Any","Student","Cambridge","astudent@fas.harvard.edu");
console.log(`Constructor function using 'this': ${entry1.fname} ${entry1.lname}`);


// This function is a constructor function using local variables instead of properties. 
//   Because of the normal rules limiting variables to function scope, these actually
//   are not porperties of the object, but are variables scoped within it. None of this
//   information can be accessed from the outside of the object, so it's not very useful. 
function NoGoodAddrBookEntry(f, l, a, e) {
    let fname = f;
    let lname = l;
    let addr = a;
    let email = e;

    let personRole = "student";
    let getFullName = function(){
                return this.fname + " " + this.lname;
    }
}
const entry2 = new NoGoodAddrBookEntry("Any","Student","Cambridge","astudent@fas.harvard.edu");
console.log(`Constructor function using variables: ${entry2.fname} ${entry2.lname}`);


// This function illustrates both - using properties (set with 'this') for information
//  that should be accessible directly on the object, and variables scoped within for
//  information that should be more protected.
function AwesomeAddrBookEntry(f, l, a, e) {
    this.fname = f;
    this.lname = l;
    this.addr = a;
    this.email = e;

    let personRole = "student";  // this can't be accessed like entry3.personRole
    this.getRole = function(){
            // But personRole is available within the object and can be returned 
            //   or manipulated using methods. 
                return personRole;  
    }
}
const entry3 = new AwesomeAddrBookEntry("Any","Student","Cambridge","astudent@fas.harvard.edu");
console.log(`Constructor function using both: ${entry3.fname} ${entry3.lname}: Role is ${entry3.getRole()}`);
// Importantly, you cannot change personRole on this object 
  entry3.personRole = "admin"; // this actually creates a new personRole property, but doesn't affect the function variable itself
  console.log(entry3.getRole());  // still 'student'

