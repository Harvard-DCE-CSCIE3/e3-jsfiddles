const myArray = ["LArry", "john", "BILL" ];

myArray.forEach(function(val, index, theArray){

	const lower = val.toLowerCase();
	const upper = val.toUpperCase();
	const correct = upper.substr(0, 1) + lower.substr(1);
	//alert(correct);
	theArray[index] = correct;

});



logMessage(myArray);

// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}