/*const happy = document.getElementById("happyBtn");
happy.addEventListener("click", function(evt){
    logMessage(evt.currentTarget.innerHTML);
});
const gloomy = document.getElementById("gloomyBtn");
gloomy.addEventListener("click", function(evt){
    logMessage(evt.currentTarget.innerHTML);
});*/

// SOLUTION: There are a variety of ways to detect
//   that the click was on one of the buttons. 
//   In part, it would depend on whether you wanted
//   any button click to be handled the same way (even
//   applying to new buttons we create in the future),
//   or just have it work on these two buttons. 
//
// This solution happens to check to see if the target's id
//   is one of the button ids, and then 
//   acts accordingly. It is but one possible solution.
document.addEventListener("click", function(evt){
    if (evt.target.id == "happyBtn" || evt.target.id == "gloomyBtn" ){
        logMessage(evt.target.innerHTML);
    }
});


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}