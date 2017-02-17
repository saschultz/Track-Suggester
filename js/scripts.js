$(document).ready(function() {
  var student = prompt("Are you a prospective Epicodus student? (Yes/No)")
    if (student === "yes") {
      $("#open").show();
    }
    else {
      alert("First Check Out: https://www.epicodus.com, then come back to us here!");
    }

  $("#formOne").submit(function(event) {
    $("#reveal").fadeIn();

    var name = $("input#name").val();
    // var start = $("input#start").val();
    // var design = $("input#design").val();
    // var mobile = $("input#mobile").val();
    // var company = $("input#company").val();

      // if (design === .val("yes")) {
      //   $(".track").show("CSS/Design");
      // } else if (mobile === .val("mobile device")) {
      //   $(".track").show("Java/Android");
      // } else if (company === .val("#new")) {
      //   $(".track").show("Ruby/Rails");
      // } else {
      //   alert("TEST");
      // }




    // $(".track").text(track); //this will need to add survery result into the reveal text
    $(".name").text(name);
    // $(".track").text(design);
    $("#reveal").show();
    event.preventDefault();
  });
});
