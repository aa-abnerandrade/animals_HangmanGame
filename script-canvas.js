funcoesCanva = [canvaCabeca(), canvaTronco(), canvaBracoE(), canvaBracoD(), canvaPernaE(), canvaPernaD()]
console.log(funcoesCanva.length, "QTD Membros");

function paintForca() {
  console.log("Até Paint Forca");

  for (let cont = 0; cont < inputsErrados.length; cont++) {
    funcoesCanva[cont];
    //console.log("Contador de membrosForca: ", cont);
  }
}

function canvaMadeira() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  // var heightRadius = 1.14; 
  // tela.height = tela.width * heightRadius;

  // MADEIRA
  pincel.fillStyle = '#0A3871'
  pincel.fillRect(10, 10, 10, 180)
  pincel.fillStyle = '#0A3871'
  pincel.fillRect(10, 10, 100, 10)
  pincel.fillStyle = '#0A3871'
  pincel.fillRect(110, 10, 10, 20)
}

// CABEÇA
function canvaCabeca() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871';
  pincel.strokeStyle = '#0A3871';
  pincel.beginPath();
  pincel.arc(115, 60, 20, 0, 10*Math.PI);
  pincel.fill();
}

//TRONCO 
function canvaTronco() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871'
  pincel.fillRect(112, 80, 3, 80)
}

// BRAÇO ESQUERDO
function canvaBracoE() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(115, 91)
  pincel.lineTo(145, 110)
  pincel.closePath()
  pincel.stroke()
}

// BRAÇO DIREITO
function canvaBracoD() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(113, 90)
  pincel.lineTo(85, 110)
  pincel.closePath()
  pincel.stroke()
}

// PERNA ESQUERDA
function canvaPernaE() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(115, 160)
  pincel.lineTo(150, 178)
  pincel.closePath()
  pincel.stroke()
}

// PERNA DIREITA
function canvaPernaD() {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');
  pincel.fillStyle = '#0A3871'
  pincel.beginPath()
  pincel.moveTo(78, 178)
  pincel.lineTo(112, 160)
  pincel.closePath()
  pincel.stroke()
}

