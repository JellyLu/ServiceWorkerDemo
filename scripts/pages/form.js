var inputs = document.getElementsByTagName("input");
var errors = document.getElementsByClassName("error");
var regionSelect = document.getElementById("region-select");

inputs[1].addEventListener("input", function(event) {
  inputs[2].setCustomValidity("");
  errors[2].innerHTML = "";
});

inputs[2].addEventListener("input", function(event) {
  inputs[2].setCustomValidity("");
  errors[2].innerHTML = "";
});

regionSelect.addEventListener("change", function(event) {
  console.log("select");
  const phonenumber1 = document.getElementById("phonenumber1");
  const phonenumber2 = document.getElementById("phonenumber2");
  const phonenumber3 = document.getElementById("phonenumber3");
  console.log("regionSelect.value", regionSelect.value);
  switch(regionSelect.value) {
    case "CN": {
      phonenumber1.pattern = "^1[5|8|3][0-9]{9}$|^[569][0-9]{7}$"
      phonenumber2.style.display = "none";
      phonenumber2.required = false
      phonenumber3.style.display = "none";
      phonenumber3.required = false
      break;
    }
    case "US": {
      phonenumber1.pattern = "[0-9]{3}"
      phonenumber2.pattern = "[0-9]{3}"
      phonenumber2.required = true
      phonenumber3.pattern = "[0-9]{4}"
      phonenumber3.required = true
      phonenumber2.style.display = "inline";
      phonenumber3.style.display = "inline";
      break;
    }
    case "SG": {
      phonenumber1.pattern = "^(6|8|9)[0-9]{3}"
      phonenumber2.pattern = "[0-9]{4}"
      phonenumber2.required = true
      phonenumber2.style.display = "inline";
      phonenumber3.style.display = "none";
      phonenumber3.required = false
      break;
    }
  }
})


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

  sendRequest(form);
});

function sendRequest(form) {
  const XHR = new XMLHttpRequest();
  const formData = new FormData(form);
  XHR.addEventListener('load', function(event) {
    alert(event.target.responseText);
  });

  XHR.addEventListener('error', function(event) {
    alert("Oops, something went wrong" + formData);
  });

  XHR.open("POST", "http://http://127.0.0.1:8877/");
  XHR.send(formData);
}
