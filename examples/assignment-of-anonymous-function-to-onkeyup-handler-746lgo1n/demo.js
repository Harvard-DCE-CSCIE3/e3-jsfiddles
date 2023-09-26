// first we'll get the HTMLElement objects for the 
// textarea and the div where we want to write the
// output

const textareaElement = document.getElementById("bio");
const echo = document.getElementById("echoLocation");

// now we'll assign a function to the 'onkeyup' handler for the
// textarea element. This function gets run every time the user
// completes a keystroke in the textarea.
textareaElement.onkeyup = function(){
    echo.innerHTML = textareaElement.value;
}
