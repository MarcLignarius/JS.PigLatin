$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput").val();
    console.log("userInput", userInput);
    let inputToArray = userInput 
    .replace(/\./g, " .")
    .replace(/\,/g, " ,")
    .replace(/\"/g, String.raw` " `)
    .split(/\s/g)
    .filter(_=>_);
    console.log("inputToArray", inputToArray);
    let result = translator(inputToArray);
    $("#output").text(result);
  });

  function translator(inputToArray) {
    let translatedArray = [];
    translatedArray.push(inputToArray);
    return translatedArray;
  };
});
