var bancoPalavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];

function raffleWord() {
    console.log(bancoPalavras);
	var palavraSecreta = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
}

function criarCampos(palavraSecreta) {
    palavraSecreta.split('').forEach(letra => {
        campoLetras.innerHTML += `<span id="letra"></span>`
    })
}

function isLetra(codigoL) {
    return codigoL >= 65 && codigoL <= 90;
}

function estructureGame() {
    palavraSecreta = raffleWord();
    qtdletters = palavraSecreta.length;
    console.log(qtdletters);
    paintForca();
    console.log("AtéPaintForca");
    // criarCampos(palavraSecreta);
    console.log("AtéPalavraSecreta");
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

var campoLetras = document.querySelector("#letras")





