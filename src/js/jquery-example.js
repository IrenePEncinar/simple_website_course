$("p").click(function() {
  $(this)
  .css({ 
    "color": "green", 
    "font-size": "20px" 
  })
  .animate({marginLeft: "20px"})
  .fadeOut()
  .fadeIn();
});

$("#add").click(function() {
  $("p").addClass("blue");
})

$("#remove").click(function() {
  $("p").removeClass("blue");
})
