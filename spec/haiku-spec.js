import {Haiku} from './../js/haiku.js'

describe('Haiku', function() {

  it('should test whether a line is split into an array', function() {
    let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
    expect(haiku.translateLineToArray(haiku.line1).length).toEqual(4)
  });

  // it('should test splitting syllables based on consecutive consonants', function() {
  //   let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
  //   let letterArray = haiku.splitEachWordIntoArray("install")
  //   expect(haiku.checkForTwoMiddleConsonants(letterArray)).toEqual(3)
  // });

  it('should test counting of vowels', function() {
    let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
    let letterArray = haiku.splitEachWordIntoArray("install")
    expect(haiku.countVowels(letterArray)).toEqual(2)
  });

  it('should test counting of silent vowels when two vowels are together', function() {
    let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
    let letterArray = haiku.splitEachWordIntoArray("peel")
    expect(haiku.isSilentTwoVowelsTogether(letterArray)).toEqual(1)
  });

  it('should test counting of silent vowels when ends with e, but not after l', function() {
    let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
    let letterArray = haiku.splitEachWordIntoArray("cave")
    let vowelCount = haiku.countVowels(letterArray)
    expect(vowelCount - haiku.isSilentEndsInE(letterArray)).toEqual(1)
  });

  it('should test counting of silent vowels when ends with e', function() {
    let haiku = new Haiku("This is a sentence", "Yes it is", "It is indeed")
    let letterArray = haiku.splitEachWordIntoArray("little")
    let vowelCount = haiku.countVowels(letterArray)
    expect(vowelCount - haiku.isSilentEndsInE(letterArray)).toEqual(2)
  });

  it('should test counting all syllables in a line', function() {
    let haiku = new Haiku("", "Yes it is", "It is indeed")
    let lineArray = haiku.translateLineToArray(haiku.line1)
    expect(haiku.loopThroughAllWords(lineArray)).toEqual(5)
  });

});
