$(document).ready(function() {
  $("#formOne").submit(function() {
      event.preventDefault();


    var name = $("input#name").val();
    var start = $("input#start").val();
    var fancy = $("input:radio[name=fancy]:checked").val();
    var mobile = $("input:radio[name=device]:checked").val();
    var company = $("input:radio[name=after]:checked").val();

      if (fancy === "design") {
      $(".track").text("CSS/Design");
      } else if (mobile === "mobile device") {
        $(".track").text("Java/Android");
      } else if (company === "new") {
        $(".track").text("Ruby/Rails");
      }
      else {
        $(".track").text("PHP/Drupal");
      }
    $("#reveal").fadeIn();
    $(".name").text(name);
    $("#reveal").show();

  });
});
