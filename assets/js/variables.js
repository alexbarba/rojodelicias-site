var images = "images/";
var thumbnail = images.appendChild("thumbnail/");
var medium = images.appendChild("medium/");

//Galeria
var food = {waffle_especial:"waffle-especial.jpg", cafe_olla:"cafe-olla.jpg", 
chilaquiles:"chilaquiles.jpg", chocoflan:"chocoflan.jpg", club_sandwich:"club-sandwich.jpg", 
frapuccino_ferrero:"frapuccino-ferrero.jpg", hot_cakes:"hot-cakes.jpg", la_tri:"la-tri.jpg", 
machaca:"machaca.jpg", omelette:"omelette.jpg", wrap:"wrap.jpg", yogurt_fruta:"yogurt-con-fruta.jpg"};

var waffle_especial = {
    hd: images + food.waffle_especial,
    medium: medium + food.waffle_especial,
    thumbnail: thumbnail + food.waffle_especial
};
document.getElementById('waffle_especial_thumbnail').src = waffle_especial.thumbnail;
alert(waffle_especial.thumbnail);

window.onload = function() {
    var total = 4;
    document.getElementById('waffle_especial_thumbnail').src = waffle_especial.thumbnail;  
};