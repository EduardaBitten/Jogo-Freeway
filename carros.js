let xCarros = [830, 830, 830, 830, 830, 830, 415, 415, 415, 415, 415, 415];
let yCarros = [75, 175, 275, 370, 470, 570, 75, 175, 275, 370, 470, 570];
let velocidadeCarros = [2.3, 3.5, 3, 1.7, 3.5, 2, 2.3, 3.5, 3, 1.7, 3.5, 2];
let larguraCarros = [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65];
let alturaCarros = [45, 45, 45, 55, 45, 45, 45, 55, 45, 45, 45, 45];


function mostraCarro(){
  for (let c = 0; c < imagemCarro.length; c++){
    image(imagemCarro[c], xCarros[c], yCarros[c], larguraCarros[c], alturaCarros[c]);
  }
}

function movimentaCarro(){
  for (let c = 0; c < imagemCarro.length; c++){
    xCarros[c] -= velocidadeCarros[c]
  }
}

function repetirMovimento(){
  for (let c = 0; c < imagemCarro.length; c++){
    if (passouATela(xCarros[c])){
      xCarros[c] = 830
   }
  }
}

function passouATela (xCarros){
  return xCarros < -65;
}

