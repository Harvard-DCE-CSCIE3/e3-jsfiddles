var button = document.getElementById("doit");
button.onclick = function () {

    // get the value from the input field (a string)
    var numbers = document.getElementById("nums").value;
    // turn the string into an array, dividing at spaces
    var numArray = numbers.split(" ");

    var sum = 0;
    // for each item in the array
    for (var i = 0; i < numArray.length; i++) {
        // turn it into a number
        var n = parseInt(numArray[i]);
        // if we got a valid result from parseInt()
        if (n) {
            // add the number to our sum    
            sum += n;
        }
    }
    console.log("sum is " + sum);
    document.getElementById("sum").innerHTML = sum;
}