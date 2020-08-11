var txt = document.getElementById("bio");

// All we need is events, the length property, and writing 
//  to the DOM to make a counter
txt.addEventListener("keyup", function () {
    document.getElementById("chars").innerHTML = this.value.length;
});