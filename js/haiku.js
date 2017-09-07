export class Haiku {

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.vowels = ["a","e","i","o","u"];
    this.consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
    this.doubleConsonantExceptions = ["th", "sh", "ph", "th", "ch", "wh"];
  }

  translateLineToArray(lineInput){
    let lineArray = lineInput.split(" ");
    return lineArray;
  }

  loopThroughAllWords(lineArray){
    for(let word in lineArray){
      let letterArray = splitEachWordIntoArray(word);
      checkForTwoMiddleConsonants(letterArray);
      // checkForConsonantSurroundedByVowels(letterArray);
    }
  }

  splitEachWordIntoArray(word){
    let letterArray = word.split("");
    return letterArray;
  }

  countVowels(letterArray){
    let vowelCount = 0;
    for(let i=0 ; i<letterArray.length ; i++){
      if(this.vowels.includes(letterArray[i])){
        vowelCount++;
      }
    }
    return vowelCount;
  }

  isSilentTwoVowelsTogether(letterArray){
    let silentVowelCount = 0;
    for(let i=0 ; i<letterArray.length ; i++){
      if(this.vowels.includes(letterArray[i]) && this.vowels.includes(letterArray[i+1])){
        silentVowelCount++;
      }
    }
    return silentVowelCount;
  }

  isSilentEndsInE(letterArray){
    let silentVowelCount = 0;
    let lastLetterIndex = letterArray.length;
    let lastLetter = letterArray[lastLetterIndex-1];
    if(lastLetter === "e" && letterArray[lastLetterIndex - 2] != "l"){
      silentVowelCount = 1;
    }
    return silentVowelCount;
  }



  countSyllablesBasedOnVowels(vowelCount,silentVowelCount){

  }

  // checkForTwoMiddleConsonants(letterArray){
  //   let ruleMetCount = 0;
  //   for(let i=1 ; i<letterArray.length ; i++){
  //     let combinedLetters = letterArray[i] + letterArray[i+1];
  //     let beforeCurrentAndAfter = letterArray[i-1] + letterArray[i] + letterArray[i+1];
  //     if((this.consonants.includes(letterArray[i]) == true && this.consonants.includes(letterArray[i+1]) == true) && this.doubleConsonantExceptions.includes(combinedLetters) == false && beforeCurrentAndAfter){
  //       ruleMetCount ++;
  //     }
  //   }
  //   return ruleMetCount;
  // }


}
