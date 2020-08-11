// In this case, we've wrapped everything in an IIFE - an Immediately Invoked Fuction Expression, or 'self-invoking function'. 
// The 'name' and other variables are  
//  wrapped within our fuction. Notice that our function
//  even contains another function. In Javascript, this 
//  is perfectly fine.  The outer function exists to create
//  an enclosed scope. Inside this function, we can write 
//  whole Javascript programs if we like, complete with variables //  and functions and more. 
(function () {
    var index = 4,
        i = 6;
    var name = "Larry";

    function add(n, p) {
        return n + p;
    }
    logMessage(add(index, i) + name);
})();
logMessage("window.name is " + window.name);

// Basic syntax for self-invoking function
(function(){
    //your code here
})();

// Basic syntax for self-invoking function, 
//  including passing in an agrument. 
(function(name){
    //your code here
})("Larry");


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}