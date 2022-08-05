var palavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];


function startGame() {
    console.log(palavras);
	var palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
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








