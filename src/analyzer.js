export const analyzer = {
    
  getWordCount: (text) => {
    let arrayWords = text.split(' ');
    let wordCount = 0;
    for (let i=0; i < arrayWords.length; i++) {
      arrayWords[i] = arrayWords[i].trim()
      if (arrayWords[i] !== ''){
        wordCount++
      }
    }
    //let cleanBlankSpaces = arrayWords.filter(item => item.trim() != '');
    //let wordCount = cleanBlankSpaces.length
    document.querySelector('[data-testid="word-count"]').textContent = 'Palabras totales: ' + wordCount
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    document.querySelector('[data-testid="character-count"]').textContent = 'Caracteres totales: ' + text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    let textArray = text.split('');
    let cleanAllBlankSpaces = textArray.filter(item => item.trim() != '')
    //let textWithoutSpaces = text.replace(/^\s+|\s+$/gm,'');
    //let characterCountExcludingSpaces = textWithoutSpaces.length;
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres totales sin espacios: ' + cleanAllBlankSpaces.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    let arrayWords = text.split(' ')
    let cleanBlankSpaces = arrayWords.filter(item => item.trim() != '');
    let arrayLength = cleanBlankSpaces.length;
    let sumLength = 0
    for (let i = 0; i < arrayLength; i++) {
      sumLength = sumLength + cleanBlankSpaces[i].length;
    };
    let avgLength = sumLength / arrayLength
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud promedio de palabra: ' + avgLength.toFixed(2);
    },
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  getNumberCount: (text) => {
    let arrayWords = text.split(' ');
    let cleanAllBlankSpaces = arrayWords.filter(item => item.trim() != '');
    let arrayLength = cleanAllBlankSpaces.length
    for (let i = 0; i <= arrayLength; i++) {
      cleanAllBlankSpaces[i] = Number(cleanAllBlankSpaces[i])
    };
    let onlyNumbers = cleanAllBlankSpaces.filter(item => !isNaN(item));
    let arrayNumbersLength = onlyNumbers.length;
    document.querySelector('[data-testid="number-count"]').textContent = 'Cantidad de números en el texto: ' + arrayNumbersLength;

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    let arrayWords = text.split(' ');
    let cleanAllBlankSpaces = arrayWords.filter(item => item.trim() != '');
    let arrayLength = cleanAllBlankSpaces.length;
    for (let i = 0; i <= arrayLength; i++) {
      cleanAllBlankSpaces[i] = Number(cleanAllBlankSpaces[i])
    };
    let onlyNumbers = cleanAllBlankSpaces.filter(item => !isNaN(item));
    //let arrayNumbersLength = onlyNumbers.length;
    let sumNumbers = 0;
    for (let j = 0; j < onlyNumbers.length; j++) {
      sumNumbers = parseInt(sumNumbers + onlyNumbers[j]);
    }
    document.querySelector('[data-testid="number-sum"]').textContent = 'Suma de todos los números en el texto: ' + sumNumbers;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
}, 
}

export default analyzer;
