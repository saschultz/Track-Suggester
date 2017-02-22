$(document).ready(function() {

  // debugger;
  // var student = prompt("Are you a prospective Epicodus student? (Yes/No)")
  //   if (student === "yes") {
  //     $("#open").show();
  //   }
  //   else {
  //     alert("First Check Out: https://www.epicodus.com, then come back to us here!");
  //   }
  //
  $("#formOne").submit(function() {
      event.preventDefault();


    var name = $("input#name").val();
    var start = $("input#start").val();
    var design = $("#design").val();
    var mobile = $("input:radio[name=device]:checked").val();
    var company = $("input:radio[name=after]:checked").val();
    var reveal = $("#reveal").val();


      if (design) {
      $("#track").text("CSS/Design");
        } else if (mobile === mobile) {
        $(".track").text("Java/Android");
      }
      // else if (company === .val("#new")) {
      //   $(".track").show("Ruby/Rails");
      // } else {
      //   alert("TEST");
      // }
    $("#reveal").fadeIn();
    $(".name").text(name);
    // $(".track").text();
    $("#reveal").show();

  });
});
