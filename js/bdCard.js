$(document).ready(function() {
  $("#create").click(function(){
    // add focus to first checkbox
    //  $("#greeting").focus();
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
    // Add all content is added to the final card.
    $("#greetingName").text(greeting + ", " + name + "!");
    $("#cardBody").text(messageText);
    $(".well").css("background-color", cardColor);
    // At future date add function to change text color.
    // At future date add toggle function to change look without losing selections.
    $(".well").css("border-radius", cardShape);
  });
});
