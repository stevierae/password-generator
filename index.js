// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Password needs to be between 8 and 128 characters. How long do you want your password to be?")
  if (passwordLength < 8 || passwordLength > 128) {
    return
  }
  

  var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
  var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var includeNumbers = "1234567890";
  var includeSpecialChars = "!@#$%^&*?"
  var passwordsize = prompt(How long do you want your password to be?)

  const lowercaseChoice = confirm("Do you want to include lowercase letters?")
  const uppercaseChoice = confirm("Do you want to include uppercase letters?")

  const numbers = confirm("Do you want to include numbers?")
  const specialChars = confirm("Do you want to include special characters?")

  for (var i=0; i<passwordsize; i++){
    if (lowercase&&password.length<passwordsize)
  }
  

}


