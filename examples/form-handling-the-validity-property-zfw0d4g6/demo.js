const ageInput = document.forms[0].age;
const ageHint = document.getElementById("agehint");

/*  This onchange handler will run every time you change the value of 'age' (even as you type).    */
ageInput.addEventListener("input", function () {
    // We check the element's 'validity' property, 
    //  which will be 'valid' or some other value 
    //  (the specific kind of invalid depends on the constraint)
    
    if (!this.validity.valid) {
        // For min/max constraints, 
        //  rangeUnderflow or rangeOverflow apply
        console.log("Too high: " + this.validity.rangeOverflow);
        console.log("Too low: " + this.validity.rangeUnderflow);

        //output a useful message
        if (this.validity.rangeOverflow) {
            agehint.innerHTML = 'Number is too high';
        } else if (this.validity.rangeUnderflow) {
            agehint.innerHTML = 'Number is too low';
        }
    }else{
        // don't forget to clear hint if the input becomes valid!
        agehint.innerHTML = '';
    }
});