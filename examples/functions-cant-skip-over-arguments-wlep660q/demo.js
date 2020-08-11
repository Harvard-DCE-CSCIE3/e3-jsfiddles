/* When you do use parameters, you can't skip.
 */ 

function person(exNum, name, age, occupation){
    console.log(exNum + ": My name is: "+name);
	console.log(exNum + ": I am " +age + " years old");
	console.log(exNum + ": I am a "+occupation);
}

person(1, "Bob", 45, "builder"); //OK
person(2, "Bob", 45); //OK
person(3, "Bob", "builder"); //not quite right
person(4, "Bob", undefined, "builder"); //OK

//the following one won't parse and breaks the code completely 
//person("Bob", , "builder"); 
