/* Wait for document to load before doing stuff, or it won't work
$( document ).ready(function() {
});*/

/* BACKGROUND */
/* 
Stole this dude's code for space background! Heck yeah!

"Spaaaaaace!" 
- Portal 2 
*/


/* Then load all the UFOs into the game by making them bigger - the floating effect is achieved by making a 15-second transition in CSS */
$("#start").click(function() {
  $("#start").css("display", "none");
  $("#ufo1").css("width", "380px");
  $("#ufo1").css("height", "380px");
  $("#ufo1").css("left", "40%");
  $("#ufo2").css("width", "420px");
  $("#ufo2").css("height", "300px");
  $("#ufo2").css("left", "40%");
  $("#ufo3").css("width", "400px");
  $("#ufo3").css("height", "400px");
  $("#ufo3").css("left", "40%");
});


/* CLICKABLES CODE */
$("#ufo1").click(function() {
  $("#ufo1").hide();
});
$("#ufo2").click(function() {
  $("#ufo2").hide();
});
$("#ufo3").click(function() {
  $("#ufo3").hide();
});

/* ADDING AND SUBTRACTING AMMO AND LIVES FROM HUD CODE */