// What's wrong with this?
// The 'name' and other variables in the global scope are  
//  wrapped within our fuction. But we still have to create our 
//  silly() function in the global scope, and then call it. 
// This is better than the prior example, window.name is not 
//  overwritten, but it's still not great. 
function silly(){
    var index = 4, i = 6;
    var name = "Larry";
    function add(n, p){
	    	return n + p;
    }
    logMessage(add(index, i) + name);
}
silly();
logMessage("window.name is "+window.name);


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}