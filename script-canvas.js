function paintForca() {
  pincel.fillStyle = '#102538'
  pincel.fillRect(0, 0, 3, 240)

  pincel.fillStyle = '#102538'
  pincel.fillRect(0, 0, 151, 3)

  pincel.fillStyle = '#102538'
  pincel.fillRect(147.5, 3, 3, 32)
}


function paintCabeca() {
  pincel.fillStyle = '#102538'
  pincel.beginPath()
  pincel.arc(150, 55, 20, 0, 2 * Math.PI)
  pincel.stroke()
}

function paintTronco() {
  pincel.fillStyle = '#102538'
  pincel.fillRect(149, 75, 2, 100)
}

function paintBracoD() {
  pincel.fillStyle = '#102538'
  pincel.beginPath()
  pincel.moveTo(151, 90)
  pincel.lineTo(181, 120)
  pincel.closePath()
  pincel.stroke()
}

function paintBracoE() {
  pincel.fillStyle = '#102538'
  pincel.beginPath()
  pincel.moveTo(149, 90)
  pincel.lineTo(119, 120)
  pincel.closePath()
  pincel.stroke()
}

function paintPernaD() {
  pincel.fillStyle = '#102538'
  pincel.beginPath()
  pincel.moveTo(151, 175)
  pincel.lineTo(181, 205)
  pincel.closePath()
  pincel.stroke()
}

function paintPernaE() {
  pincel.fillStyle = '#102538'
  pincel.beginPath()
  pincel.moveTo(149, 175)
  pincel.lineTo(119, 205)
  pincel.closePath()
  pincel.stroke()
}

