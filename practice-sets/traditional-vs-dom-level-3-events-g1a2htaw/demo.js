var btn = document.getElementById("theButton");
btn.ondblclick = function(evt){
    if (evt.target.style.color != 'red'){
        evt.target.style.color = 'red';
    }else{
        evt.target.style.color = 'blue';
    }
}