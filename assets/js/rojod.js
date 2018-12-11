$(function () {
	
	$("#menu-total section div .menu-contenido").hide();

	$("#menu-total section div .menu-section").click(function (event) {
				if ($(this).find($(".fa")).hasClass('fa-caret-down'))  {       
					$("#menu-total section div .menu-contenido").slideUp(200); //slide up all the sub divs
					$("#menu-total section div .menu-section").find($(".fa")).removeClass('fa-rotate-180'); // bring all iconsto normal
					$(this).find($(".fa")).addClass('fa-rotate-180'); // rotate icon by 180
					if ($(this).next().is(":visible")) { // check if item is visible
							$("#menu-total section div .menu-section").find($(".fa")).removeClass('fa-rotate-180'); // if yes then undo icon rotation
							$(this).next().slideUp(200); // slide current up
					}
					else
							$(this).next().slideDown(200); // else slide the current down
				} 
	});


	$(document).click(function (e) {
			if ($("#menu-total section div .menu-section").is(e.target)) { //if clicked other than 'a' or 'i' tag
					$("#menu-total section div .menu-contenido").slideUp(200); // slide all up
					if ($("#menu-total section div .menu-section").find($(".fa")).hasClass('fa-rotate-180')) {
							$(this).find($(".fa")).removeClass('fa-rotate-180'); //remove all rotation
							
					}
			}

	});
});