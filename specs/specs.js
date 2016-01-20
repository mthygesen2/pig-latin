// Figure out amount of words in string
//
// describe('vowelCheck', function() {
//   it("is false for a word that starts with a consonant", function() {
//     expect(vowelCheck("hello")).to.equal(false);
//   });
//
//   it("is true for a word that starts with a vowel", function() {
//     expect(vowelCheck("elephant")).to.equal(true);
//   });
// });
//
// describe('vowelAppend', function(){
//   it("is going to add ay to end of word", function() {
//     expect(vowelAppend("elephant")).to.equal("elephantay");
//   });
// });
//
// describe('consonantAppend', function(){
//   it("is going to move the first consonant to the back and add ay", function(){
//     expect(consonantAppend("hello")).to.equal("ellohay");
//   });
//   it("is going to move all consonants to the back if string starts with two consonants and add ay", function () {
//     expect(consonantAppend("trick")).to.equal("icktray");
//   });
//   it("is going to move all consonants to the back if string starts with three consonants and add ay", function () {
//     expect(consonantAppend("through")).to.equal("oughthray");
//   });
//   it("is going to move both qu to the back and ay", function () {
//     expect(consonantAppend("quiet")).to.equal("ietquay");
//   });
//   it("is going to move qu along with other consonants in front of it to the back and add ay", function(){
//     expect(consonantAppend("squeal")).to.equal("ealsquay");
//   });
//   it("is going to treat y as a consonant", function() {
//     expect(consonantAppend("yellow")).to.equal("ellowyay")
//   });
// });
//
// describe('wordCount', function() {
//   it("is going to return the number of words the user entered", function() {
//     expect(wordCount("This is a string")).to.equal(4);
//   });
// });

// describe('pigLatinPrint', function() {
//   it("is going to take a string of multiple words and convert to pig latin", function() {
//     expect(pigLatinPrint("Hello how are you doing today")).to.equal("elloHay owhay areay ouyay oingday odaytay")
//   });
// });

describe('pigLatin', function() {
  it("adds -ay to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
  it("is going to move the first consonant to the back and add ay", function(){
    expect(pigLatin("hello")).to.equal("ellohay");
  });
  it("is going to move all consonants to the back if string starts with two consonants and add ay", function () {
    expect(pigLatin("trick")).to.equal("icktray");
  });
  it("is going to move all consonants to the back if string starts with three consonants and add ay", function () {
    expect(pigLatin("through")).to.equal("oughthray");
  });
  it("is going to move both qu to the back and ay", function () {
    expect(pigLatin("quiet")).to.equal("ietquay");
  });
  it("is going to move qu along with other consonants in front of it to the back and add ay", function(){
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });
  it("is going to treat y as a consonant", function() {
    expect(pigLatin("yellow")).to.equal("ellowyay")
  });
  it("is going to take a string of multiple words and convert to pig latin", function() {
    expect(pigLatin("Hello how are you doing today")).to.equal("elloHay owhay areay ouyay oingday odaytay")
  });

});
