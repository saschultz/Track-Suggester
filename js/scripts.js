$(document).ready(function() {
  debugger;
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
    var start = $("input#start").val();
    var design = $("input#design").val();
    var reveal = $("#reveal").val();
    var mobile = $("input#mobile").val();
    var company = $("input#company").val();


    // 
    // if (design === $function(value("yes")) {
    //   alert("test");
    // }
  // if (design === .val("yes")) {
  //     $(".track").show("CSS/Design");
  // } // } else if (mobile === .val("mobile device")) {
      //   $(".track").show("Java/Android");
      // } else if (company === .val("#new")) {
      //   $(".track").show("Ruby/Rails");
      // } else {
      //   alert("TEST");
      // }

    $(".name").text(name);
    $(".track").text();
    $("#reveal").show();
    event.preventDefault();
  });
});
