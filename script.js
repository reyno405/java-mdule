// Assignment code here

var generateBtn = document.querySelector("#generate");

//variables to be used
var enter;
var confirmCharacters;
var confirmNumbers;
var confirmUpper;
var confirmLower;
var userChoices = [];

//Characters characters list
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "}", "~"].join("");
//number list
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].join("");
// var alphabet list
var alphaUpper = ["A", "B","C","D","E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].join("");
//Lowercase alphabet list
var alphaLower = alphaUpper.toString().toLocaleLowerCase();

//ask for input for the password lenth and convert it to an integer
function generatePassword() {
  // Ask four user Input
 var enter = prompt("How many characters would you like your password? Choose between 8 and 128");
    console.log("Password length " , enter);
//alert for input
  if(!enter) {
    alert("Does Not Meet Password Requirements");

    } if (enter < 8 && enter > 128) {
      enter = parseInt(prompt("password must be 8 to 128 characters"));
      console.log("Password lenth" , enter);
  
    } else {
    var confirmCharacters = confirm("include Characters characters? (eg. %, $, !, #)");
      console.log("Characters" , confirmCharacters)
    var confirmNumbers = confirm("Include any number? (eg. 1, 2, 3, 4)");
      console.log("Numbers" , confirmNumbers)
    var confirmUpper = confirm("Include any Uppercase letter? (eg. A, B, C, D)");
      console.log("Upper case " , confirmUpper);
    var confirmLower = confirm("Include any Lowercase letters?(eg. a, b, c, d)");
      console.log("Lower case " , confirmLower);
  };
  if (confirmNumbers) {
    userChoices = userChoices + numbers
      console.log(userChoices)
  }
  if (confirmLower) {
    userChoices = userChoices + alphaLower
      console.log(userChoices)
  }
  if (confirmUpper) {
    userChoices = userChoices + alphaUpper
      console.log(userChoices)
  }
  if (confirmCharacters) {
    userChoices = userChoices + characters
      console.log(userChoices)
  }
  var passwordTest = []
  var passwordBlank = [];
  //Loop for random selection
   for (var i = 0; i < enter; i++) {
    passwordTest += userChoices[Math.floor(Math.random() * userChoices.length)];
    
  }
  passwordBlank.push(passwordTest);
    // console.log(userChoices);
    
  // Join and return the password 
  var password = passwordBlank.join("");
    console.log("Your Pasword is: " + password);
  return password;
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

