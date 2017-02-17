$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var name = $("input#name").val();
    var design = $("input#design").val();
    // var tech = $("input#tech").val();

    $(".name").text(name);
    $(".design").text(design);
    // $(".tech").text(tech);
    $("#reveal").show();

    if (".design") {
      alert("We suggest the CSS/Design track!");
      // else if {
      // alert("We do not suggest our CSS/Design track.");
      // }
      // else {
      //
      // }
    }

    event.preventDefault();
  });
});
