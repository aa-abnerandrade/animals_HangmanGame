function paintForca() {

  /*MADEIRA*/
  pincel.fillStyle = '#ffffff'
  pincel.fillRect(10, 10, 10, 200)

  pincel.fillStyle = '#ffffff'
  pincel.fillRect(10, 10, 100, 10)

  pincel.fillStyle = '#ffffff'
  pincel.fillRect(110, 10, 10, 20)

  /* CABEÇA */
  pincel.strokeStyle = '#ffffff'
  pincel.beginPath()
  pincel.arc(115, 60, 20, 0, 10*Math.PI)
  pincel.stroke()

  /* TRONCO */
  pincel.fillStyle = '#ffffff'
  pincel.fillRect(112, 80, 3, 80)
  
  /* Braço Esquerdo */ 
  pincel.fillStyle = '#ffffff'
  pincel.beginPath()
  pincel.moveTo(115, 91)
  pincel.lineTo(145, 110)
  pincel.closePath()
  pincel.stroke()

  /* Braço Direito */
  pincel.fillStyle = '#ffffff'
  pincel.beginPath()
  pincel.moveTo(113, 90)
  pincel.lineTo(85, 110)
  pincel.closePath()
  pincel.stroke()

  /* Perna Esquerda */
  pincel.fillStyle = '#ffffff'
  pincel.beginPath()
  pincel.moveTo(115, 160)
  pincel.lineTo(150, 178)
  pincel.closePath()
  pincel.stroke()

  /* Perna Direita */
  pincel.fillStyle = '#ffffff'
  pincel.beginPath()
  pincel.moveTo(78, 178)
  pincel.lineTo(112, 160)
  pincel.closePath()
  pincel.stroke()
}

