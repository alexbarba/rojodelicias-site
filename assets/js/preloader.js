//<![CDATA[
window.onload = function() {
	// makes sure the whole site is loaded
	$("#preloader")
		.delay(550)
		.fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body")
		.delay(550)
		.css({overflow: "visible"});
};

//]]>
