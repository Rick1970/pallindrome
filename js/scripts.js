$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var check = $("#input").val().split("");

    var revcheck = check.slice().reverse();

    var first = check.toString();
    var second = revcheck.toString();
    if (check.toString() === revcheck.toString()) {
      alert("True");
    }



    event.preventDefault();

  });
});
