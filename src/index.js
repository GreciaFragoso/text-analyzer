import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
let userText = document.getElementById('user-input');
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
})

/*function cleanContent(){
    //let content = document.getElementById('user-input');
    //content.value = '';
    text.value = '';
};*/