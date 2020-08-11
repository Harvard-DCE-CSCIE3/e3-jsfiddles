// All these point to HMTLFormElement 'firstForm'

// The document.forms property is an HTMLCollection 
//  which can be dereferenced by [integer] or property name  
console.log( document.forms[0] );                   // theForm
console.log( document.forms["firstForm"] );         // theForm
console.log( document.forms.firstForm );            // theForm

// And of course, document.getElementById() always works
console.log( document.getElementById("theForm") );  // theForm
