$(document).ready(function() {
  $("#create").click(function(){
    // stop refresh
    event.preventDefault();
    // checkbox
    var greeting = $("#greeting").val();
    // to email, from email, name. not doing email at this time because we haven't learned how to work with them yet. will be done at a future date.
    var name = $("#recipentName").val();
    // custom message
    var messageText = $("#message").val();
    // color wheel
    var cardColor = $("#color").val();
    // date picker
    var deliveryDate = $("#delivery").val();
    // page shape "radius"
    var cardShape = $("input:radio[name=radius]:checked").val();
  });
});
