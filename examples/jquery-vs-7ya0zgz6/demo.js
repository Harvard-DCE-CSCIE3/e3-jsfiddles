// call noConflict() to relinquish the $
jQuery.noConflict();

// Now we try each form. 
//  Only the jQuery() syntax works.
jQuery("h2").css("color", "blue");
$("h1").css("color", "red");

