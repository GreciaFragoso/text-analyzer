export let analyzer = {  
  imprimirEnConsola: () => {
    console.log('Hola')},

  getWordCount: (text) => {
    let arrayWords = text.split(' ');
    let cleanBlankSpaces = arrayWords.filter(item => item.trim() != '');
    let wordCount = cleanBlankSpaces.length
    //let cleanSideSpaces = text.trim()
    //let arrayWords = cleanSideSpaces.split(' '); //matriz donde cada miembro es una palabra (se separan con espacio)
    //let wordCount = arrayWords.length
    document.getElementById('word-count').textContent = 'Palabras totales: ' + wordCount
    return wordCount;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    let characterCount = text.length;
    document.getElementById('character-count').textContent = 'Caracteres totales: ' + characterCount
    return characterCount;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    let textArray = text.split('');
    let cleanAllBlankSpaces = textArray.filter(item => item.trim() != '')
    let characterCountExcludingSpaces = cleanAllBlankSpaces.length
    //let textWithoutSpaces = text.replace(/^\s+|\s+$/gm,'');
    //let characterCountExcludingSpaces = textWithoutSpaces.length;
    document.getElementById('character-no-spaces-count').textContent = 'Caracteres totales sin espacios: ' + characterCountExcludingSpaces
    return characterCountExcludingSpaces;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    let arrayWords = text.split(' ')
    let cleanBlankSpaces = arrayWords.filter(item => item.trim() != '');
    let arrayLength = cleanBlankSpaces.length
    console.log(arrayLength)
    let sumLength = 0
    for (let i = 0; i < arrayLength; i++) {
      sumLength = sumLength + cleanBlankSpaces[i].length
      console.log(sumLength);
    };
    let avgLength = sumLength / arrayLength
    document.getElementById('word-length-average').textContent = 'Longitud promedio de palabra: ' + avgLength;
    return avgLength;
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
    document.getElementById('number-count').textContent = 'Cantidad de números en el texto: ' + arrayNumbersLength;

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
    let arrayNumbersLength = onlyNumbers.length;
    let sumNumbers = 0;
    for (let j = 0; j < arrayNumbersLength; j++) {
      sumNumbers = parseInt(sumNumbers + onlyNumbers[j]);
      console.log(sumNumbers);
    }
    document.getElementById('number-sum').textContent = 'Suma de todos los números en el texto: ' + sumNumbers;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
}, 
}

export default analyzer;
