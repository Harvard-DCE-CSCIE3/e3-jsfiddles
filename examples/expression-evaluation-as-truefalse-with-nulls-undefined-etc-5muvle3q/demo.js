var a=1;
var b="0";
var c=0;
var d;
var e=false;
var f=null;
var g=parseInt("seven");

if (a){
    console.log("a: The number 1 is not false")
}
if (b){
    console.log("b: The string '0' is not false")
}
if (!c){  // ! is the negation operator, pronounced "not"
    console.log("c: but the number 0 evaluates to false")
}
if (!d){
    console.log("d: and so does 'undefined'")
}
if (!e){
    console.log("e: 'false' is, of course, false");
}
if (!f){
    console.log("f: and null evaluates to false")
}
if (!g){
    console.log("g: " + g + " is a value, and it evaluates to false");
}

if (d==f && !d && !f){
     console.log("undefined and null are equivalent and both evaluate to false");   
}

if (d!=e && f!=e){
    console.log("but evaluating to false does not always equal false");
}

