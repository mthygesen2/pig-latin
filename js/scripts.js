var vowelCheck = function(userInput) {
  var firstLetter = userInput.slice(0, 1);
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
};

var vowelAppend = function(userInput) {
  var vowelOutput = userInput + "ay";
  return vowelOutput;
};

var consonantAppend = function(userInput) {
  var firstLetter = userInput.slice(0, 1);
  var consonantOutput = userInput.substr(1) + firstLetter + "ay";
  return consonantOutput;
};
