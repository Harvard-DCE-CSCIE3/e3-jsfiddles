jQuery.noConflict(); //uncomment this to test your solution

// SOLUTION NOTE #1
//  Protect global scope and .noConflict()
//   by wrapping everything in a self-invoking
//   function. 
(function($) {
    $.fn.showSize = function () {
        console.log(this);
        // SOLUTION NOTE #2:
        //  Function must return the jQuery collection
        //   to support chaining.  We could just do
        //   'return this;' at the end, but since
        //   this.each() returns the collection too, (since it is itself a
        //   well-behaved jQuery method), we can just return that.
        return this.each(function (i, el) {
            var span = document.createElement('span');
            var jqSpan = $(span);
            jqSpan.addClass("super");
            jqSpan.html("size: " + el.clientWidth + "x" + el.clientHeight);
            el.appendChild(jqSpan[0]);
        });
    }
    //  END PART OF SOLUTION NOTE #1
})(jQuery);
   //   END PART OF SOLUTION NOTE #1

//   SOLUTION NOTE #3: MUST COMMENT THIS LINE ONCE WE'VE CALLED .noConflict()
//$('p').showSize();
// uncomment the following line to test your solution
jQuery('p').showSize().css("color", "blue");