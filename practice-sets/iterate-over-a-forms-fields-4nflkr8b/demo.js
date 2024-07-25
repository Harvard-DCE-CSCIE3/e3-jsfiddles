// Prevent the form from submitting - not a requirement for the assignment, but stops
//  unwanted behavior if you click "submit"
document.getElementById("myform").addEventListener('submit', (e)=>e.preventDefault());

/* Write your code here to iterate over the form's fields and output the   values in each field to the console.  Your code should access the FORM object and iterate over the fields rather than get each form field by its ID.  

It should also work for a form of any number of fields, and work with any value typed into the field by a user. 
*/

// suggested steps
// 1)  get the form element from the page

// 2) iterate over the form's elements array and write each element's value to the console