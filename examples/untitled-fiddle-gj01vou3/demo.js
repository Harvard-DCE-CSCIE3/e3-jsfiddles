//comparing performance of getElementByID() vs. querySelector()

console.log("by ID");
let d = new Date();
for (let i=0; i<100000; i++){
	document.getElementById("first");
}
console.log(new Date().getTime() - d.getTime());


console.log("now query selector");
d = new Date();
for (let i=0; i<100000; i++){
	document.querySelector("#first");
}
console.log(new Date().getTime() - d.getTime());
