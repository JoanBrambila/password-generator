function generatePassword(){
  var uppercase = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var number = ['0','1','2','3','4','5','6','7','8','9'];
  var symbol = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  
  textContent = "";
  array = [];
var lengthChoice = window.prompt("Enter the desired number of characters. (must be between 8-128");

if (isNaN(lengthChoice)){
  alert("You must choose a number between 8-128");
  return;
}
else if (lengthChoice < 8 || lengthChoice > 128){
  alert("You must choose a number between 8-128");
  return;
}
var yesupperChoice = window.confirm("Do you want uppercase letters in your password?")
if (yesupperChoice == true) {
  array = array.concat(uppercase);
}

var yeslowerChoice = window.confirm("Do you want lowercase letters in your password?")


if (yeslowerChoice == true) {
  array = array.concat(lowercase);
}

var yesnumberChoice = window.confirm("Do you want numbers in your password?")



if (yesnumberChoice == true) {
  array = array.concat(number);
}

var yessymbolChoice = window.confirm("Do you want symbols in your password?")

if (yessymbolChoice == true) {
  array = array.concat(symbol);
}
if (!yeslowerChoice && !yesupperChoice && !yesnumberChoice && !yessymbolChoice){
  alert("You must have at least one character choice") 
}

for (var i = 0; i < lengthChoice; i++)
textContent += array[Math.floor(Math.random() * array.length)];
return textContent;
}

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