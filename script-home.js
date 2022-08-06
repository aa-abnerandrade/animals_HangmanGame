var palavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];

function raffleWord() {
    console.log(palavras);
	var palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
}

function criarCampos(palavraSecreta) {
    palavraSecreta.split('').forEach(letra => {
        campoLetras.innerHTML += `<span class="letter"></span>`
    })
}

function estructureGame() {
    palavraSecreta = raffleWord();
    qtdletters = palavraSecreta.length;
    console.log(qtdletters);
    paintForca();
    criarCampos(palavraSecreta);
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

const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');
const heightRadius = 1.14;
tela.height = tela.width * heightRadius;

const campoLetras = document.querySelector("#letras")





