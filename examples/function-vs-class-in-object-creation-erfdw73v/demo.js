// functional definition of the Person object
function Person(fname, lname, email, title){
  this.fname = fname;
  this.lname = lname;
  this.email = email;
  this.title = title;

  this.getFullName = function(){
    return `${fname} ${lname}`;
  }
}
Person.prototype.getFullName2 = function(){return `${fname} ${lname}`;}

// class-based definition of the Person2 object
class Person2{
    constructor(fname, lname, email, title){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.title = title;
        this.getFullName = function(){
          return `${fname} ${lname}`;
        }
    }
    getFullName2(){
      return `${this.fname} ${this.lname}`;
    }
}

// create instances of the two objects using 'new' 
const p = new Person("William","Shakespeare","bill@tempest.com", "Playwright");
console.log(p)


const p2 = new Person2("William","Shakespeare","bill@tempest.com", "Playwright");
console.log(p2);
// see the console for the resulting objects

// Note that we can modify these at will at any time. This would not typically possible in a true class-based object system.
p.newProperty = "hi there!";
p2.newProperty = "hi there!";

// we can also add prototype properties to either one after the fact
Person.prototype.newFunction = function(){alert("hi there!");}
Person2.prototype.newFunction = function(){alert("hi there!");}

// These calls commented out because their alerts are annoying
//p.newFunction();
//p2.newFunction();
