// Prevent the form from submitting - not a requirement for the assignment, but stops
//  unwanted behavior if you click "submit"
document.getElementById("myform").addEventListener('submit', (e)=>e.preventDefault());

/* Write your code here to iterate over the form's fields and output the   values in each field to the console.  Your code should access the FORM object and iterate over the fields rather than get each form field by its ID.  
It should also work for a form of any number of fields, and work with any value typed into the field by a user. 
*/

// SOLUTION:
// suggested steps
// 1)  get the form element from the page
const form = document.forms[0];
// 2) iterate over the form's elements array and write each element's value to the console
//.    Array.forEach won't work here, as elements is an HTMLCollection, not an Array
// use a for loop  
const elements = form.elements;
for(let i=0;i<elements.length;i++){
  console.log(elements[i].value);
}
// could also do for..of
for (el of elements){
	console.log(el.value);
}
// Or make an Array pf using the Array.from() method
//.   and then use Array.forEach()
Array.from(elements).forEach(el => console.log(el.value));

// MORE INFORMATION: NOTICE THAT THE FELDSET
//  AND THE SUBMIT BUTTON ARE PARTS OF THE elements
//  ARRAY
for(let i=0;i<elements.length;i++){
    var el = elements[i];
    console.log(`${el.tagName}#${el.id}:${el.value}`);
}
