$(document).ready(function() {
  // $("select").change(function() {
  //   if($(this).val() === "yes")
  //
  // { alert("We suggest the CSS/Design track!");
  //  }

  $("#formOne").submit(function(event) {






    var name = $("input#name").val();
    var design = $("input#design").val();
    // // var tech = $("input#tech").val();
    //
    $(".name").text(name);
    // $(".design").text(design);
    // $(".tech").text(tech);
    $("#reveal").show();





    event.preventDefault();
  });
});
