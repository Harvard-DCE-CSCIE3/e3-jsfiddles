// This function will add three numbers....
// or at least, add the first three numbers you give it 
function addNumbers(num1, num2, num3){
var sum=0;		
    if (typeof num1 == "number"){
   		sum+=num1; 
    }
    if (typeof num2 == "number"){
		sum += num2;
    }
    if (typeof num3 == "number"){
		sum += num3;
    }
	  return sum;
}
console.log(addNumbers(1, 2));        // 3
console.log(addNumbers(1, 2, 3));     // 6
console.log(addNumbers(1, 2, 3, 4));  // 6

// I also could have tried to convert these parameters to numbers, 
//  In that case, each conditional would have looked more like this:
//  num1=Number(num1)
//  if (num1){
//  	sum+num1;
//  } 