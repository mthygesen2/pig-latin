// function: is vowel?
// vowel function: add a-ay
// consonant function

describe('vowelCheck', function() {
  it("is false for a word that starts with a consonant", function() {
    expect(vowelCheck("hello")).to.equal(false);
  });

  it("is true for a word that starts with a vowel", function() {
    expect(vowelCheck("elephant")).to.equal(true);
  });
});

describe('vowelAppend', function(){
  it("is going to add ay to end of word", function() {
    expect(vowelAppend("elephant")).to.equal("elephantay");
  });
});

describe('consonantAppend', function(){
  it("is going to move the first consonant to the back and add ay", function(){
    expect(consonantAppend("hello")).to.equal("ellohay");
  });
});
