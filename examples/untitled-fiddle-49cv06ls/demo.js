console.clear();
// iterate over an array - we know it's size
var myArray = ["zeroth", "first", "second", "third"];
for (var i=0; i<myArray.length; i++){
	console.log("Array position "+i+" is "+myArray[i]);
}

// Add consecutive integers until their sum exceeds 1000
// Conceptual application might be accumulating points until a game level is complete
// Note that in this case, the body of the loop runs once
// before the looping condition is checked. This is the real
// differentiator of the do/while structure. 
var sum = 0, count = 0;
do{
	sum += count;
	count++;
} while (sum<=1000);
console.log(count);
console.log(sum);

// Finally, loop syntax allows most cases to be matters of preference.
// For example, I can duplicate the do/while case above with for loop
// syntax.  
// You don't need all three terms to be present in the definition of a for loop.
// Remember, it's 
//      for ([initialExpression]; [condition]; [incrementExpression])
// You can leave any of these blank, but be sure to include the semi-colons. 
count=0; 
sum=0;
for (;;){
	sum += count++;
  if (sum>1000){
	  break;
  }
} 
console.log(count);
console.log(sum);

// you can increment by more than ++
for (let i=0; i<=100; i+=2 ){
  // do something
}

// you don't have to start at zero
for (let i=3; i<100; i+=4){
	console.log(i);
}