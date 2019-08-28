var inputs = document.getElementsByTagName("input");
var errors = document.getElementsByClassName("error");

inputs[1].addEventListener("input", function(event) {
  inputs[2].setCustomValidity("");
  errors[2].innerHTML = "";
});

inputs[2].addEventListener("input", function(event) {
  inputs[2].setCustomValidity("");
  errors[2].innerHTML = "";
});

var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  console.log("on submit");
  event.preventDefault();
  const email = event.currentTarget[1].value;
  const confirmEmail = event.currentTarget[2].value;
  if(email !== confirmEmail) {
    event.currentTarget[2].setCustomValidity("confirm email is not the same with email");
    errors[2].innerHTML = "confirm email is not the same with email";
  }

  if(!form.checkValidity()) {
    alert("form is invalid");
    return false;
  }
});
