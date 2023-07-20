export const analyzer = {

  getWordCount: (text) => {
    const arrayWords = text.split(' ');
    let wordCount = 0;
    for (let i=0; i < arrayWords.length; i++) {
      arrayWords[i] = arrayWords[i].trim()
      if (arrayWords[i] !== ''){
        wordCount++
      }
    }
    return wordCount;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //const textArray = text.split('');
    const signs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const puntuationless = text.replace(signs, '');
    const textArray = puntuationless.split('');
    const cleanAllBlankSpaces = textArray.filter(item => item.trim() !== '')
    const woSpaces = cleanAllBlankSpaces.length
    return woSpaces
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const arrayWords = text.split(' ')
    const cleanBlankSpaces = arrayWords.filter(item => item.trim() !== '');
    const arrayLength = cleanBlankSpaces.length;
    let sumLength = 0
    for (let i = 0; i < arrayLength; i++) {
      sumLength = sumLength + cleanBlankSpaces[i].length;
    }
    const avgLength = sumLength / arrayLength;
    const decimal = avgLength.toFixed(2);
    return parseFloat(decimal);
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  getNumberCount: (text) => {
    const arrayWords = text.split(' ');
    let numbersCount = 0;
    for (let i=0; i < arrayWords.length; i++) {
      arrayWords[i] = arrayWords[i].trim();
    }
    for (let i=0; i < arrayWords.length; i++) {
      if (arrayWords[i] !== ''){
        arrayWords[i] = Number(arrayWords[i])
        if (!isNaN(arrayWords[i])){
          numbersCount++
        }
      }
    } 
    return numbersCount
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    const arrayWords = text.split(' ');
    const cleanAllBlankSpaces = arrayWords.filter(item => item.trim() !== '');
    const arrayLength = cleanAllBlankSpaces.length;
    for (let i = 0; i <= arrayLength; i++) {
      cleanAllBlankSpaces[i] = Number(cleanAllBlankSpaces[i])
    }
    const onlyNumbers = cleanAllBlankSpaces.filter(item => !isNaN(item));
    let sumNumbers = 0;
    for (let j = 0; j < onlyNumbers.length; j++) {
      sumNumbers = parseFloat(sumNumbers + onlyNumbers[j]);
    }
    return sumNumbers;
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.   
  }, 
}

export default analyzer;
