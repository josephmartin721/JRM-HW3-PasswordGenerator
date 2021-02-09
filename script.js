// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  var passwordLength = prompt("Select how many characters are in your password 1-8");

  var lowerCases = confirm("Does your password contain lowercases?");

  var upperCases = confirm("Does your password contain uppercases?");

  var special = confirm("Does your password contain specail characters?");

  var numbers = confirm("Does your password contain numbers?");

  var minimumCount = 0;

  var maximumCount = 8;
  
}