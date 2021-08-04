// Assignment Code
var generateBtn = document.getElementById('generate');
var choseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var choseSymbols = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?", "/", ".", ",", "\""]
var choseNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  
function generatePassword () {
  var lowCase;
  var upCase;
  var symbols;
  var numbers;
  var finalPass = "";
  var options = [];
  var passLength = parseInt(
    prompt ("How long would you like the password to be?")
    )
    // if (Number.isNaN(passLength)) {
      // return null;
    // }
    if (passLength < 8) {
      alert("Your password needs to be longer"); 
    }
    else if (passLength > 127) {
      alert("Your password needs to be shorter!");
    }
    else {
        upCase = confirm("Would you like upcase letters?");
        symbols = confirm("Would you like symbols letters?");
        numbers = confirm("Would you like numbers letters?");
        lowCase = confirm("Would you like lowcase letters?");
        
        if (!upCase && !symbols && !numbers && !lowCase) {
          return alert("You need to meet the parameters!");
        }
        if (upCase) {
          options = options.concat(choseUpper);
        }
        if (lowCase) {
          options = options.concat(choseLower);
        }
        if (symbols) {
          options = options.concat(choseSymbols);
        }
        if (numbers) {
          options = options.concat(choseNumbers);
        }

        for (var i = 0; i < passLength; i++) {
          finalPass += options[Math.floor(Math.random() * options.length)];
        }
        return finalPass;
    }
  }









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









