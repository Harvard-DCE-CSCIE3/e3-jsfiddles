/* Write your code here to iterate over the form's fields and output the   values in each field to the console.  Your code should access the FORM object and iterate over the fields rather than get each form field by its ID.  

It should also work for a form of any number of fields, and work with any value typed into the field by a user. 
*/
// SOLUTION:
// suggested steps
// 1)  get the form element from the page
var form = document.forms[0];
// 2) iterate over the form's elements array and write each element's value to the console
//MOST SIMPLE:  
var elements = form.elements;
for(i=0;i<elements.length;i++){
  console.log(elements[i].value);
}
// MORE INFORMATION: NOTICE THAT THE FELDSET
//  AND THE SUBMIT BUTTON ARE PARTS OF THE elements
//  ARRAY
for(i=0;i<elements.length;i++){
    var el = elements[i];
    console.log(el.tagName +"#" + el.id +": "+el.value);
}
