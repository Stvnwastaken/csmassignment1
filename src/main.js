import "./index.css";

$(document).ready(function () {
  $("#dynamic-heading").css("color", "white");
  $("#dynamic-button").on("click", function () {
    $("#dynamic-heading").animate({ fontSize: "50px" }, 500, function () {
      $("#my-picture").css("border", "6px solid #09A8DF");
      $("#dynamic-heading").css("color", "#09A8DF");
      setTimeout(function () {
        $("#dynamic-heading").animate(
          {
            fontSize: "36",
          },
          250
        );
        $("#dynamic-heading").css("color", "white");
      }, 500);
    });
  });
});
