// What's wrong with this?
// The 'name' variable in the global scope collides with 
// JSFiddle's use of the window.name property. Click 'Run'
//  a second time on this page and see JSfiddle trying to 
//  make a frame called "Larry"
var index = 4, i = 6;
var name = "Larry";
function add(n, p){
	return n + p;
}
logMessage(add(index, i) + name);


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}