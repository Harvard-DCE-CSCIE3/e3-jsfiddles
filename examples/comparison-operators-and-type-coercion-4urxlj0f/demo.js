const a = 6, b = 10;
if (a < b) {
    alert("1: you'll see this if a is less than b!");
} 

a = 6, b = "10";
if (a < b) {
    alert("2: you'll see this if a is less than b!");
}  

a = 6, b = "ten";
if (a < b) {
    alert("3: you'll see this if a is less than b");
} 
