// your solutions here

// #1
$('ol#tasks > li').css("backgroundColor", "yellow");
// Also could do simpler selector, like $('li'), but I 
//  wanted this one to be specific to this list 

// #2
$('#thirdItem').html($('#secondItem').html());
// also could expand this by doing something like:
//  var secondHtml = $('#secondItem').html();
//  $('#thirdItem').html(secondHtml);

// #3
$('#fourthItem').click(function(){
    $(this).toggle();
});