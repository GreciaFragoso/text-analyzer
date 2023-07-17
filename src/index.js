import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let userText = document.querySelector('textarea');
userText.addEventListener('keyup',() => {
    let text = userText.value;
    analyzer.getWordCount(text);
    analyzer.getCharacterCount(text);
    analyzer.getCharacterCountExcludingSpaces(text);
    analyzer.getAverageWordLength(text);
    analyzer.getNumberCount(text);
    analyzer.getNumberSum(text);
})

const cleanTextContent = document.getElementById('reset-button');
cleanTextContent.addEventListener('click', () => {
    userText.value = '';
    document.querySelector('[data-testid="word-count"]').textContent  = 'Palabras totales: 0'
    document.querySelector('[data-testid="character-count"]').textContent = 'Caracteres totales: 0'
    document.querySelector('[data-testid="character-no-spaces-count"]').textContent = 'Caracteres totales sin espacios: 0'
    document.querySelector('[data-testid="word-length-average"]').textContent = 'Longitud promedio de palabra: -'
    document.querySelector('[data-testid="number-count"]').textContent = 'Cantidad de números en el texto: 0'
    document.querySelector('[data-testid="number-sum"]').textContent = 'Suma de todos los números en el texto: 0'
})

/*function cleanContent(){
    //let content = document.getElementById('user-input');
    //content.value = '';
    text.value = '';
};*/