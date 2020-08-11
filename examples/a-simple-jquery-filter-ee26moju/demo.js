$.expr.filters.blue = function(el){
	//console.log($(el).css('color'));
    if ($(el).css('color') == 'rgb(0, 0, 255)'){
		return true;
	}
}

$("div:blue").css("font-style", "italic");
