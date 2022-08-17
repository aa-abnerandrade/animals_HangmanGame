function paintForca() {
  console.log("Até Paint Forca");
  const membrosForca = document.querySelectorAll(".forca-membro");

  console.log(membrosForca);
  for (let cont = 0; cont < inputsErrados.length; cont++) {
    membrosForca[cont].style.display = "block";
    console.log(membrosForca);
    console.log("Contador de membrosForca: ", cont);
  }
}

