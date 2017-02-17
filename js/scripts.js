$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#reveal").fadeIn();

    var name = $("input#name").val();
    var start = $("input#start").val();
    var design = $("input#design").val();
    var mobile = $("input#mobile").val();
    var company = $("input#company").val();
    // // var tech = $("input#tech").val();
    //
    $(".name").text(name);
    // $(".design").text(design);
    // $(".tech").text(tech);
    $("#reveal").show();





    event.preventDefault();
  });
});
