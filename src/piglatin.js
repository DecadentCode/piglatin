const translate = (wordsString) => {
  wordsString = wordsString.toLowerCase();
  const wordsArray = wordsString.split(" ");
  const translatedArray = [];
  const vowels = ["a", "e", "i", "o", "u"];
  const validCharacters = "abcdefghijklmnopqrstuvwxyz'";
  const validArray = validCharacters.split("");
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    let firstLetter = word[0];
    const wordArray = word.split("");
    let validWord = true;
    for (let i = 0; i < wordArray.length; i++) {
      if (!validArray.includes(wordArray[i])) {
        validWord = false;
      }
    }
    if (validWord) {
      if (vowels.includes(firstLetter)) {
        word += "way";
        translatedArray.push(word);
      } else {
        let counter = 0;
        let firstLetters = firstLetter;
        while (!vowels.includes(word[counter]) && counter < word.length) {
          if (counter > 0) {
            firstLetters += word[counter];
          } else if (counter > word.length) {
            break;
          }
          counter++;
        }
        word = word.slice(firstLetters.length);
        word += firstLetters + "ay";
        translatedArray.push(word);
      }
    } else {
      translatedArray.push(word);
    }
  }
  let translatedString = translatedArray.join(" ");
  return translatedString.toLowerCase();
};

module.exports = { translate };

// Hello World -> ellohay orldway
