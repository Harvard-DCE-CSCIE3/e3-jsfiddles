var testStrings = ['a1', 'ab12', 'abcdef', 'abc1234', 'abc123', 'def456'];

// your regular expression goes here, between the '/' characters. 
var regex = //;

for (var i = 0; i < testStrings.length; i++) {
    logMessage(regex.test(testStrings[i]));
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