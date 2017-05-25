// This is a case where document.ready fires too early - slabtext will not initialize properly because the fonts have not fully loaded yet.


window.onload = function(){

	// initialize slabtext
	$("h1").slabText();

};