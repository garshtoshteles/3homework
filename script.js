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

var lcbool;
var ucbool;
var numbool;
var scbool;

function makeid(chosenlength) {
  var result = "";
  var LC = "abcdefghijklmnopqrstuvwxyz";
  var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "0123456789";
  var SC = "!#$%&()*+,-.~@[]{}";
  var characters = "";
  if (lcbool == true) {
    characters += LC;
  }
  if (ucbool == true) {
    characters += UC;
  }
  if (numbool == true) {
    characters += nums;
  }
  if (scbool == true) {
    characters += SC;
  }
  var charactersLength = characters.length;
  for (var i = 0; i < chosenlength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generatePassword() {
  // include prompts for criteria
  // length criteria
  var pwlength = prompt(
    "How long would you like your password to be? Anything from 8 - 128 characters (inclusive) is accepted."
  );
  if (pwlength < 8 || pwlength > 128) {
    alert("Please enter a length between 8 and 128.");
    return;
  }
  // character types
  lcbool = confirm("Include lowercase characters?");
  ucbool = confirm("Include uppercase characters?");
  numbool = confirm("Include numbers?");
  scbool = confirm("Include special characters?");
  // ensure that at least one character type is selected
  if (!lcbool && !ucbool && !numbool && !scbool) {
    alert("You must include at least one character type.");
    return;
  }
  return makeid(pwlength);
}
