import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
window.addEventListener('load', function() {
  const userText = document.querySelector('textarea');
  userText.addEventListener('keyup',() => {
    const text = userText.value;
    const wordCount = analyzer.getWordCount(text);
    analyzer.getCharacterCount(text);
    const woSpaces = analyzer.getCharacterCountExcludingSpaces(text);
    const decimal = analyzer.getAverageWordLength(text);
    const numbersCount = analyzer.getNumberCount(text);
    const sumNumbers = analyzer.getNumberSum(text);

    document.querySelector('[data-testid="word-count"]').textContent = 'Palabras totales: ' + wordCount;
    document.querySelector('[data-testid="character-count"]').textContent = 'Caracteres totales: ' + text.length;
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres totales sin espacios ni signos de puntuación: ' + woSpaces;
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud promedio de palabra: ' + decimal;
    document.querySelector('[data-testid="number-count"]').textContent = 'Cantidad de números en el texto: ' + numbersCount; /*arrayNumbersLength;*/
    document.querySelector('[data-testid="number-sum"]').textContent = 'Suma de todos los números en el texto: ' + sumNumbers.toFixed(2);
  })

  const cleanTextContent = document.getElementById('reset-button');
  cleanTextContent.addEventListener('click', () => {
    userText.value = '';
    document.querySelector('[data-testid="word-count"]').textContent = 'Palabras totales: 0'
    document.querySelector('[data-testid="character-count"]').textContent = 'Caracteres totales: 0'
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres totales sin espacios ni signos de puntuación: 0'
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud promedio de palabra: -'
    document.querySelector('[data-testid="number-count"]').textContent = 'Cantidad de números en el texto: 0'
    document.querySelector('[data-testid="number-sum"]').textContent = 'Suma de todos los números en el texto: 0'
  })
})
/*function cleanContent(){
    //let content = document.getElementById('user-input');
    //content.value = '';
    text.value = '';
};*/