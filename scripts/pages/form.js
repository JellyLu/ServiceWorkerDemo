var form = document.getElementsByTagName('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(!form.checkValidate()) {
    alert("form is invalid");
    return false;
  }
});
