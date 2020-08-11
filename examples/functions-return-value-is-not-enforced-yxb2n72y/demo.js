/* A function may or may not return anything,  and if it does, you don't necessarily have to do anything with the return value.
 */ 
// In this case, we return a sum, but aren't using the return 
//  value for anything
function addItems(item1, item2){
		return item1+item2;
}
addItems(4, 5); //return value goes nowhere

/*******************************************/
// In this case, we aren't returning anything, so when we try to 
//   get a value back from the function call, it's undefined
function addItems2(item1, item2){
		console.log(item1+item2);
}
var sum2 = addItems2(4, 5); //undefined
console.log("The sum returned by addItems2() is "+ sum2);

/*******************************************/
// In this case, we return a value and use it
function addItems3(item1, item2){
		return item1+item2;
}
var sum3 = addItems3(4, 5); //9
console.log("The sum returned by addItems3() is "+ sum3);