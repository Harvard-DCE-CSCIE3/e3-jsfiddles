// global function
function sayName(){
    console.log(this);
	console.log("My name is "+this.name);
}

// constructor function in which we assign sayName() to a property
function Person(n){
    this.name = n;
    this.sayIt = sayName;
}

// make some Persons and call sayIt() to see the value of this
var a = new Person("Frodo");
a.sayIt();
var b = new Person("Samwise");
b.sayIt();