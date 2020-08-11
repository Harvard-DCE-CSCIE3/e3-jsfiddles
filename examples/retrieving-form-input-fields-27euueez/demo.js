// this will retreive the first form in our HTML
var f = document.forms[0];

// these all will retreive the HTMLInputElement for first name
console.log(  f[0])  ;   		     // fname
console.log(  f["firstname"]  );     // fname
console.log(  f.firstname  );        // fname
console.log(  document.getElementById("fname")  );  // fname