var inputs = document.getElementsByTagName("input");

var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
  console.log("on submit");
  event.preventDefault();
  const email = event.currentTarget[1].value;
  const confirmEmail = event.currentTarget[2].value;

  if(email !== confirmEmail) {
    event.currentTarget[2].setCustomValidity("confirm email is not the same with email");
  }

  if(!form.checkValidity()) {
    alert("form is invalid");
    return false;
  }
  alert("form is valid");
});
