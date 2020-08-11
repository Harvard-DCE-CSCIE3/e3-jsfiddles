// 1) basic array creation
var myFavoritePets = new Array();
myFavoritePets[0]="dog";
myFavoritePets[1]="cat";
myFavoritePets[2]="kangaroo";
myFavoritePets[3]="whale";

// another way to initialize - these brackets are indicators of an array
var myFavoritePetsAgain = [];
myFavoritePetsAgain[0]="dog";
myFavoritePetsAgain[1]="cat";
myFavoritePetsAgain[2]="kangaroo";
myFavoritePetsAgain[3]="whale";

// literal notation works, too
var myFavoritePetsReally = ["dog","cat","kangaroo","whale"];

//you can use Array constructor
var myFavoriteCars = new Array("Ford","BMW","Tesla","Matchbox");

// But it can be a bad idea - imagine my array contains numbers
// Seems good, no?
var myFavoritePlayers = new Array(12,87,11,75);
console.log("myFavoritePlayers[0] :"+myFavoritePlayers[0]);

/// But there's a quirk that if there is just a single number 
//   argument, you get an empty array of this size
//  So the output of this isn't 34, but undefined
var myOtherFavoritePlayers = new Array(34);
console.log("myOtherFavoritePlayers[0]: "+myOtherFavoritePlayers[0]);

// We can get the length of an array
var myFavoriteFoods = ["Quinoa Salad","Steamed Vegetables","Ribeye Steak"];
console.log("myFavoriteFoods.length :"+myFavoriteFoods.length);

// But it isn't really 'length' - it's (maxindex-1)
//  Note: An Array can have empty places in it
myFavoriteFoods[47] = "Ice Cream";
console.log("myFavoriteFoods.length :"+myFavoriteFoods.length);

// No "associative array" in Javascript
var myFavoriteFlavorsArray = [];    
myFavoriteFlavorsArray[0] = "cinnamon";           // good
myFavoriteFlavorsArray["icecream"] = "vanilla";   // bad 
console.log(myFavoriteFlavorsArray);              // the property does exist

// but normal Array operations (length, toString()) won't work on it
console.log("The array is: " + myFavoriteFlavorsArray);   
console.log("Its length is: " + myFavoriteFlavorsArray.length);

// arrays can contain any data types, including other arrays
var myMixedArray = [4, "Bob", true, ["another","array","inside"]];
console.log("myMixedArray[1]: "+ myMixedArray[1]);
console.log("myMixedArray[3][2]: " + myMixedArray[3][2]);

var my2DArray = [[0,0,0],[0,1,2],[0,2,4],[0,3,6]];
console.log("my2DArray[1][2]: " + my2DArray[1][2]);
