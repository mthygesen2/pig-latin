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
