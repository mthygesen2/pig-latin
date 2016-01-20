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
  var secondLetter = userInput.slice(1, 2);
  var thirdLetter = userInput.slice(2, 3);

  if (((thirdLetter !== "a" && thirdLetter !== "e" && thirdLetter !== "i" && thirdLetter !== "o" && thirdLetter !== "u") && (secondLetter !== "a" && secondLetter !== "e" && secondLetter !== "i" && secondLetter !== "o" && secondLetter !==  "u")) || secondLetter + thirdLetter === "qu") {
    var consonantOutput = userInput.substr(3) + firstLetter + secondLetter + thirdLetter + "ay";
    return consonantOutput;
  } else if ((secondLetter !== "a" && secondLetter !== "e" &&            secondLetter !== "i" && secondLetter !== "o" && secondLetter !==  "u") || firstLetter + secondLetter === "qu") {
      var consonantOutput = userInput.substr(2) + firstLetter + secondLetter + "ay";
      return consonantOutput;
  } else {
    var consonantOutput = userInput.substr(1) + firstLetter + "ay";
    return consonantOutput;
  }
};

var pigLatin = function(userInput) {
  var result = "";
  var wordArray = userInput.split(" ");
  wordArray.forEach(function(word){
    if (vowelCheck(word)) {
      result += (vowelAppend(word) + " ");
    } else {
      result += (consonantAppend(word) + " ");
    };
  });
  result = result.slice(0, -1);
  return result;
};
