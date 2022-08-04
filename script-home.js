var palavras = ['ORACLE', 'ALURA', 'HTML', 'JAVASCRIPT', 'CSS', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE']

function startGame() {
    console.log(palavras);
	var palavraSecreta = palavras[Math.floor(Math.random()*palavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
}

function salvarNovaPalavra(novaPalavraDigitada) {
    var palavraDigitada = document.getElementById("novaPalavraDigitada");
    palavraDigitada = palavraDigitada.value;
    palavraDigitada = palavraDigitada.toUpperCase();
    palavras.push(palavraDigitada)
    console.log(palavras);
    alert("Palavra inserida!")
}



document.getElementById("novaPalavraDigitada").focus();






