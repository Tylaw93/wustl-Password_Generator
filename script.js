// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = []
for(var i = 0; i < lower.length; i++){
   upper.push(lower[i].toUpperCase())
   }
var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = [" ", "!", "#", "$", "%" ,"&", "'","(",")","*","+","-", ".", "/", ":", ";", "<", '"',"=",">", "?", "@","[,", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}
function generatePassword() {
  var allowedCharacters = []
  var gate = false
  var long = prompt("How long do you want the password to be? Must be between 8 and 128");
  while (long < 8 || long > 128){
    alert("I'm sorry the number must be between 8 and 128 try again");
    long = prompt("How long do you want the password to be? Must be between 8 and 128");
  }
  var lowerCase = prompt("Do you want to include lowercase letters? (Y/N)");
  while (gate === false){
    if (lowerCase === "Y" || lowerCase === "N"){
      gate = true
    }
    else{
    alert("I'm sorry is that a yes or a no? Please only enter Y or N");
    lowerCase = prompt("Do you want to include lowercase letters? (Y/N)");
    }
  }
  gate = false
  var upperCase = prompt("Do you want to include uppercase letters? (Y/N)");
  while (gate === false){
    if (upperCase === "Y" || upperCase === "N"){
      gate = true
    }
    else{
    alert("I'm sorry is that a yes or a no? Please only enter Y or N");
    upperCase = prompt("Do you want to include uppercase letters? (Y/N)");
    }
  }
  gate = false
  var numeric = prompt("Do you want to include numbers? (Y/N)");
  while (gate === false){
    if (numeric === "Y" || numeric === "N"){
      gate = true
    }
    else{
    alert("I'm sorry is that a yes or a no? Please only enter Y or N");
    numeric =  prompt("Do you want to include numbers? (Y/N)");
    }
  }
  gate = false
  var specialCharacters = prompt("Do you want to include special characters? (Y/N)");
  while (gate === false){
    if (specialCharacters === "Y" || specialCharacters === "N"){
      gate = true
    }
    else{
    alert("I'm sorry is that a yes or a no? Please only enter Y or N");
    specialCharacters = prompt("Do you want to include special characters? (Y/N)");
    }
  }
  
  
  if (lowerCase == "Y"){
    for(var i = 0; i < lower.length; i++){
      allowedCharacters.push(lower[i])
    }
  }
  if (upperCase == "Y"){
    for(var i = 0; i < upper.length; i++){
      allowedCharacters.push(upper[i])
    }
  }
  if (numeric == "Y"){
    for(var i = 0; i < numerals.length; i++){
      allowedCharacters.push(numerals[i])
    }
  }
  if (specialCharacters == "Y"){
    for(var i = 0; i < special.length; i++){
      allowedCharacters.push(special[i])
    }
  }
  var characters = "";
  var max = allowedCharacters.length;
  for(var i =0; i < long; i++){
    var pick = Math.floor(Math.random()*max - 0 +1) +0;
    var choice = allowedCharacters[pick];
    characters = characters + choice;

  }
  debugger;
  console.log(characters)
  return characters;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
