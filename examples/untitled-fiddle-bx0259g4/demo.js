var a = 1;
function f(a){
	console.log("in the function a: "+ a);
  if(a==11){
  	let b = 2;
    console.log("block scope b is: "+b);
  }
  //console.log("outside the block b is: "+b); 
}
f(11);
console.log("global a is "+a);