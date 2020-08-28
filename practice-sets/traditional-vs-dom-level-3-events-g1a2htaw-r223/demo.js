var btn = document.getElementById("theButton");
/*btn.ondblclick = function(evt){
    if (evt.target.style.color != 'red'){
        evt.target.style.color = 'red';
    }else{
        evt.target.style.color = 'blue';
    }
}*/

// SOLUTION: use btn.addEventListener() rather than
//  the btn.ondblclick property. 
btn.addEventListener("dblclick", function(evt){
    if (evt.target.style.color != 'red'){
        evt.target.style.color = 'red';
    }else{
        evt.target.style.color = 'blue';
    }
});