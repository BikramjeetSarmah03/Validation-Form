var username = document.getElementById("username");
var password = document.getElementById("psw");
var msg_uname = document.getElementById("message_username");
var msg_pasw = document.getElementById("message_password");
var capitalMsg = document.getElementById("capitalMsg");
var lowerMsg = document.getElementById("lowerMsg");
var numberMsg = document.getElementById("numberMsg");
var lengthStrMsg = document.getElementById("lengthMsg");
var capitalPsw = document.getElementById("capitalPsw");
var lowerPsw = document.getElementById("lowerPsw");
var numberPsw = document.getElementById("numberPsw");
var lengthStrPsw = document.getElementById("lengthPsw");
var symbolPsw = document.getElementById("symbolPsw");

// validate regex
var upperCaseLetters = /[A-Z]/g;
var lowerCaseLetters = /[a-z]/g;
var number = /[0-9]/g;
var symbols = /[@#$_]/g;

username.onfocus = function () {
  msg_uname.style.display = "block";
};
username.onblur = function(){
     msg_uname.style.display="none";
}
password.onfocus = function () {
  msg_pasw.style.display = "block";
};
password.onblur = function () {
  msg_pasw.style.display = "none";
};

username.onkeyup = function () {
  // Validate Capital Letters
  if(username.value.match(upperCaseLetters)){
    capitalMsg.classList.add("valid");
    capitalMsg.classList.remove("invalid");
  }else{
    capitalMsg.classList.add("invalid");
    capitalMsg.classList.remove("valid");
  }

  // Validate Small Letters
  if(username.value.match(lowerCaseLetters)){
    lowerMsg.classList.add("valid");
    lowerMsg.classList.remove("invalid");
  }else{
    lowerMsg.classList.add("invalid");
    lowerMsg.classList.remove("valid");
  }

  // Validate Numbers
  if(username.value.match(number)){
    numberMsg.classList.add("valid");
    numberMsg.classList.remove("invalid");
  }else{
    numberMsg.classList.add("invalid");
    numberMsg.classList.remove("valid");
  }

  // Validate length
  if (username.value.length >= 8 && username.value.length <= 20) {
    lengthStrMsg.classList.add("valid");
    lengthStrMsg.classList.remove("invalid");
  } else {
    lengthStrMsg.classList.add("invalid");
    lengthStrMsg.classList.remove("valid");
  }
};

password.onkeyup = function () {
  // Validate Capital Letters
  if(password.value.match(upperCaseLetters)){
    capitalPsw.classList.add("valid");
    capitalPsw.classList.remove("invalid");
  }else{
    capitalPsw.classList.add("invalid");
    capitalPsw.classList.remove("valid");
  }

  // Validate Small Letters
  if(password.value.match(lowerCaseLetters)){
    lowerPsw.classList.add("valid");
    lowerPsw.classList.remove("invalid");
  }else{
    lowerPsw.classList.add("invalid");
    lowerPsw.classList.remove("valid");
  }

  // Validate Numbers
  if(password.value.match(number)){
    numberPsw.classList.add("valid");
    numberPsw.classList.remove("invalid");
  }else{
    numberPsw.classList.add("invalid");
    numberPsw.classList.remove("valid");
  }

  // Validate length
  if (password.value.length >= 8 && password.value.length <= 20) {
    lengthStrPsw.classList.add("valid");
    lengthStrPsw.classList.remove("invalid");
  } else {
    lengthStrPsw.classList.add("invalid");
    lengthStrPsw.classList.remove("valid");
  }
  // Validate symbols
  if (password.value.match(symbols)) {
    symbolPsw.classList.add("valid");
    symbolPsw.classList.remove("invalid");
  } else {
    symbolPsw.classList.add("invalid");
    symbolPsw.classList.remove("valid");
  }
};
