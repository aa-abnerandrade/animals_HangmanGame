var inputsErrados = []; 
var inputsCertos = [];

function avisarLetraRepetida() {
    let aviso = document.getElementById("aviso-LetraRepetida")
    console.log(aviso);
    aviso.classList.remove('invisivel');
    aviso.classList.add('visivel');
    setTimeout(() => {
        aviso.classList.remove("visivel");
    }, 2000);
    aviso.classList.add('invisivel');
}

function updateGame() {

}

function game() {
    document.addEventListener("keydown", (teclado) => {
        let codigoL = teclado.keyCode;
        console.log(codigoL);
        
        if (isLetra(codigoL)) {
            let letraDigitada = teclado.key;
            console.log(letraDigitada);
            console.log(inputsCertos);
            console.log(inputsErrados);

            if (inputsErrados.includes(letraDigitada)) {
                avisarLetraRepetida();
            } else {
                if (palavraSecreta.includes(letraDigitada)) {
                    inputsCertos.push(letraDigitada);
                } else {
                    inputsErrados.push(letraDigitada);
                }
            }
          updateGame();
        }
    });
}