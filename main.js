function tocarSom (idAudioTecla) { 
   document.querySelector(idAudioTecla).play();
}

// Essa é a lista de todas as teclas que estão no HTML 
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocarSom(idAudio)
    } ;
    contador++; 
}
