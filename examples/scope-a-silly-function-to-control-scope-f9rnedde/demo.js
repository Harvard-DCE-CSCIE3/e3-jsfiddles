// What's wrong with this?
// The 'console' and other variables in the global scope are  
//  wrapped within our fuction. But we still have to create our 
//  function in the global scope, and then call it. 
// This is better than the prior example, window.console is not 
//  overwritten, but it's still not great.   
function containScopeAndRun(){ 
    var index = 4, i = 6;   //commonly named variables likely to collide if global
    var console = "Logging integer sum to the console";  
    function add(n, p){
        return n + p;
    }
    logMessage(console + " " + add(index, i));
    //logMessage(`${console} ${add(index, i)}`);
}
containScopeAndRun();
logMessage("The console still works!");

// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
    console.log(msg);
}