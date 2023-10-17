// global function
function sayName() {
    console.log(this);
    console.log("My name is " + this.name);
}

// constructor function in which we assign sayName() to a property
function Person(n) {
    this.name = n;
    this.sayIt = sayName;
}

// make some Persons and call sayName.call() to see the value of this
const a = new Person("Frodo");
const b = new Person("Samwise");
sayName.apply(a);
sayName.apply(b);
// We can make ANY object the context for a function call
sayName.apply(window);
