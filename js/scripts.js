$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput").val();
    console.log("userInput", userInput);
    let result = translator(userInput);
    $("#output").text(result);
  });

  function translator(userInput) {
    let result = [];
    result.push(userInput);
    return result;
  }
});
