const f = document.forms[0];

/*  This handler will run when you submit the form    */
f.addEventListener("submit", function (e) {
    
    /// Here we can do whatever we want with the form
    //    and its elements. 
    for (let i=0; i< f.elements.length; i++){
         console.log(f.elements[i].value);   
    }
    
    // if things aren't right, I can cancel the form
    //  submission right here:
    e.preventDefault();    

});