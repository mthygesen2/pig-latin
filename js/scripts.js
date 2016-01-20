var vowelCheck = function(userInput) {
  var firstLetter = userInput.slice(0, 1)
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
};
