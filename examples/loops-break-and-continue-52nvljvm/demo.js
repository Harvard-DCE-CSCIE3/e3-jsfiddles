//print out only names that start with 'B'
var names = ["Alan", "Ben", "Barbara", "Christine", "Harry", "Steven", "Vivian"];

for (var i=0; i<names.length; i++){
    if (names[i].charAt(0) != 'B'){   
       continue; 
    }
    console.log(names[i]);
}

//find the position of the string 'Harvard' in this array
// and then stop looking
var schools = ["Yale", "Brown", "Stanford", "Duke", "Harvard", "Columbia", "Princeton"];
for (var i=0; i<schools.length; i++){
    if (schools[i] == "Harvard"){
        break;   
    }   
}
console.log("The string 'Harvard' is at position "+i+" in the list");