var testStrings = ['a1', 'ab12', 'abcdef', 'abc1234', 'abc123', 'def456'];

// your regular expression goes here, between the '/' characters. 
// TWO SOLUTIONS THAT PASS THE TESTS:
var regex = /^[a-z]{3}\d{3}/i;  //start of string, 3 letters, 3 digits, not case-sensitive
var r2 =  /[a-z,A-Z]{3}\d{3}/; // 3 letters, 3 digits
// (NOTE THAT THESE WOULDN'T MATCH IF A NON-ENGLISH
//  ALPHABET IS USED IN THE TESTS: e.g  ä ø î  ) 

// OTHER SOLUTIONS THAT PASS THE TESTS
var r3 = /\w{3}\d{3}/;  //3 word characters,3 digits (but also would match '123456')

var r4 = /\D{3}\d{3}/;  //3 non-digits, 3 digits (but also would match '$#@234')



for (var i = 0; i < testStrings.length; i++) {
    logMessage(r2.test(testStrings[i]));
}


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}