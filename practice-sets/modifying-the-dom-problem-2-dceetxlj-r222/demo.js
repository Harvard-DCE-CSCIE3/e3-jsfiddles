// SOLUTION HERE

// 1
var newDiv = document.createElement("div");
// 2 
newDiv.setAttribute("id", "myNewDiv");
// 3
var text = document.createTextNode("This will be inside my new div!");
// 4
newDiv.appendChild(text);
// 5
document.getElementById("addNewOneHere").appendChild(newDiv);