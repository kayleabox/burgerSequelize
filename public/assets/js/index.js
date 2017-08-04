
$(document).ready(function(){

$(".modal-button").click(function() {
  var target = $(this).data("target");
  $("html").addClass("is-clipped");
  $("#"+target).addClass("is-active");
});

$(".close-modal").click(function() {
  var cancel = $(this).attr("value");
  $("html").removeClass("is-clipped");
  $(cancel).removeClass("is-active");
});

$(".save-burger").click(function() {

});

$(".save-acc").click(function(){

});

});
