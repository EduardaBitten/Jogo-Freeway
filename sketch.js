function setup(){
  createCanvas(830, 700);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraPersonagem();
  movimentarYoda();
  mostraCarro();
  movimentaCarro();
  repetirMovimento();
  verificarColisão();
  incluirPlacar();
  marcarPontos();
  podeSeMover();

}

