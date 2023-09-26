"use strict";

// We'll set a logging preference here

// By default we log to the console, but if we set loggingPreference to PAGE, we log to the #output element. 
// If you set it to anything else, the logging will go to the console.
const loggingPreference = 'PAGE';

//simple fuction to log messages to the console or the web page
// accepts the message to log
// returns nothing
function logMessage(myMessage){
    if (loggingPreference == 'PAGE'){
        document.getElementById("output").innerHTML += "<br>" + myMessage;
    } else {
        console.log(myMessage);
    }
}

//call my function
logMessage("I am Sam");
logMessage("I am Bob");
