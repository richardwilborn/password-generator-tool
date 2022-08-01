// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = [" ", "!", ,'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumbers = confirm("Do you to include numbers?");
    var askLowerCase = confirm("Do you want to include lower case letters?");
    var askUpperCase = confirm("Do you want to include upper case letters?");
    var askSpecial = confirm("Do you want to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Password lenght must be between 8 and 128 characters");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("At least one character type should be selected");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

function generatePassword() {
  var passwordOptions = questions();
  var combo = [];
  var generatedPassword = "";


  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      combo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      combo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      combo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      combo.push(i);
  }

  console.log(combo);

  for (var i = 0; i < passwordOptions.length; i++) {
    generatedPassword += combo[Math.floor(Math.random() * combo.length)];
    
  }
  console.log(generatedPassword);

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);