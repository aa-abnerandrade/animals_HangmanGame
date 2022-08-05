var palavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];

function estructureGame(palavraSecreta) {
    qtdletters = palavraSecreta.length;
    console.log(qtdletters);
    for (let cont = 0; cont < qtdletters; cont++) {
        paintForca();
    }
}

function raffleWord() {
    console.log(palavras);
	var palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
	console.log(palavraSecreta);
	estructureGame(palavraSecreta);
}

function validateNewWord(novaPalavraDigitada) {
    var palavraDigitada = document.getElementById("umaNovaPalavra");
    palavraDigitada = palavraDigitada.value;
    palavraDigitada = palavraDigitada.toUpperCase();
}

function addNewWord(novaPalavraDigitada) {
    var palavraDigitada = document.getElementById("umaNovaPalavra");
    palavraDigitada = palavraDigitada.value;
    palavraDigitada = palavraDigitada.toUpperCase();
    palavras.push(palavraDigitada)
    console.log(palavras);
    alert("Palavra inserida!")
}

const canvas = document.querySelector('canvas');
const heightRadius = 1.14;
canvas.height = canvas.width * heightRadius;
const pincel = canvas.getContext('2d');





