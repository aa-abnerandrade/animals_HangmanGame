var bancoPalavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];

function raffleWord() {
    console.log(bancoPalavras);
	var palavraSecreta = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
}

function isLetra(codigoL) {
    return codigoL >= 65 && codigoL <= 90;
}

function estructureGame() {
    palavraSecreta = raffleWord();
    qtdletters = palavraSecreta.length;
    console.log(qtdletters);
    paintForca();
    game();
}

function validateNewWord() {
    const umaNovaPalavra = document.getElementById("umaNovaPalavra").value;
    const palavraValidada = umaNovaPalavra.toUpperCase();
    console.log(palavraValidada);
    addNewWord(palavraValidada);
}

function addNewWord(palavraValidada) {
    const novaPalavra = palavraValidada
    bancoPalavras.push(novaPalavra);
    // console.log(bancoPalavras);
    alert("Palavra inserida!");
    document.getElementById("umaNovaPalavra").value = '';
    loadHome();
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var heightRadius = 1.14;
tela.height = tela.width * heightRadius;






