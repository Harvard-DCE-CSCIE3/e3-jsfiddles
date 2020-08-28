// your solution here
// some suggested steps:
// 1)  Get the elements for the ids 'moveMe', 'oldParent', and 'newParent' and assign them to variables 
//       (You actually will not need all three of these, you only need two. Part of the task is to figure out which two. Refer to the MDN docs linked in the HTML for guidance.)
// SOLUTION NOTE: 
//  Appending moveMe to newParent automatically detaches it from 
//    oldParent, so we don't have to do anything with #oldParent. 
//    (A DOM node can't have two parentNodes.)
var moveMe = document.getElementById("moveMe");
var newParent = document.getElementById("newParent");

// 2) Now, use appendChild() to make the move happen.  
newParent.appendChild(moveMe);