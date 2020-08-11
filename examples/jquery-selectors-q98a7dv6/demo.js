// by Tag name
console.log("by tag name:");
console.log(   jQuery('h3') );
console.log(   jQuery('h3').html("This is my new h3 content") ); //with method call

// by ID
console.log("by id:");
console.log(   jQuery('#1st')  );

// by tag, id and DOM tree order
console.log("by tag, id, DOM tree order:");
console.log(   $('ul#myList li')  );  //multiple matches

// no match
console.log("no match, but still a return value:");
console.log(   $('#thereIsNoId').html("hi")  ); //no match, but a return value

// by other jQuery selectors
console.log("by other jQuery selectors:");
console.log(   $('ul#myList .listitem:last') );

// Make a jquery object out of a plain DOMElement
// Use the element itself instead of a selector string 
// as the argument to the jQuery function. 
var el = document.getElementById("1st");
console.log("make a DOM element into a jQuery object");
console.log( $(el) );

// You can always get the DOM object from the jquery object
//  be referecing its array(-like) elements
console.log(   $('ul#myList .listitem:last')[0] );



