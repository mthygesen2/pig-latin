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
  it("is going to move all consonants to the back if string starts with two consonants and add ay", function () {
    expect(consonantAppend("trick")).to.equal("icktray");
  });
  it("is going to move all consonants to the back if string starts with three consonants and add ay", function () {
    expect(consonantAppend("through")).to.equal("oughthray");
  });
  it("is going to move both qu to the back and ay", function () {
    expect(consonantAppend("quiet")).to.equal("ietquay");
  });
});
