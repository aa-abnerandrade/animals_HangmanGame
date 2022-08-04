function desenhaCabeca() {
    pincel.fillStyle = 'darkblue'
    pincel.beginPath()
    pincel.arc(150, 55, 20, 0, 2 * Math.PI)
    pincel.stroke()
  }
  
  function desenhaTronco() {
    pincel.fillStyle = 'darkblue'
    pincel.fillRect(149, 75, 2, 100)
  }
  
  function desenhaBracoD() {
    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.moveTo(151, 90)
    pincel.lineTo(181, 120)
    pincel.closePath()
    pincel.stroke()
  }
  
  function desenhaBracoE() {
    pincel.fillStyle = 'darkblue'
    pincel.beginPath()
    pincel.moveTo(149, 90)
    pincel.lineTo(119, 120)
    pincel.closePath()
    pincel.stroke()
  }
  
  function desenhaPernaD() {
    pincel.fillStyle = 'darkblue'
    pincel.beginPath()
    pincel.moveTo(151, 175)
    pincel.lineTo(181, 205)
    pincel.closePath()
    pincel.stroke()
  }
  
  function desenhaPernaE() {
    pincel.fillStyle = 'darkblue'
    pincel.beginPath()
    pincel.moveTo(149, 175)
    pincel.lineTo(119, 205)
    pincel.closePath()
    pincel.stroke()
  }
  
  function desenhaForca() {
    pincel.fillStyle = 'darkblue'
    pincel.fillRect(0, 0, 3, 240)
  
    pincel.fillStyle = 'darkblue'
    pincel.fillRect(0, 0, 151, 3)
  
    pincel.fillStyle = 'darkblue'
    pincel.fillRect(147.5, 3, 3, 32)
  }