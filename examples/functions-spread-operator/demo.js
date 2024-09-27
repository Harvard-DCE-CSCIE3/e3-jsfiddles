function addItems(item1, item2, item3){
  return item1+item2+item3;
}

// the spread operator will pass the values of the array myArray
//  in to the function, where they will be applied to the function
//  parameters avaiable. 
let myArray = [4,5,6]
let sum = addItems(...myArray);
console.log("first sum is "+sum);

// We can use literal values in our function call, and follow up
//   with a spread operator to for any remaining parameters
sum = addItems(1, ...myArray);  // Only the first two items from myArray will be passed, 
                                //   since addItems only has three parameters, 
                                //   so we're adding 1, 4, 5 
console.log("second sum is "+sum);

