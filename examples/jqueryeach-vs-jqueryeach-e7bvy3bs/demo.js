
var paras = document.getElementsByTagName("P");
// NodeList can be accessed by [0]
$('#output').append(paras[0]);

// But you can't do this - paras isn't an array, it's a NodeList
/*
paras.forEach(function(i){
   $('#output').append(i);
});
*/

// jQuery Utility function $.each() iterates over objects of any kind
$.each(paras,function(i, v){
    $('#output').append(i + ":" + v + "<br>");//v.innerHTML
});

$.each({name:"Simon",profession: "cat",},function(i, v){
    $('#output').append(i + ":" + v + "<br>");//v.innerHTML
});

// jQuery().each() selector function iterates over jQuery objects,
//  usually one returned from a selector.  
$('p').each(function(i, v){
    // v is the HTML element, not a jquery emelent - remember what the selector returns
    $('#output').append(i + ":" + v + "<br>");//v.innerHTML 
});