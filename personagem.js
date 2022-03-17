//variáveis personagem
let xYoda = 60;
let yYoda = 640;
let larguraYoda = 65;
let alturaYoda = 55;
let colidiu = false;

// variáveis pontuação

let pontuacao = 0;

function mostraPersonagem(){
  image(personagem, xYoda, yYoda, larguraYoda, alturaYoda);
}

function movimentarYoda(){
  if (keyIsDown(UP_ARROW)){
    yYoda -= 3;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yYoda += 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    xYoda += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xYoda -= 3;
  }

}

function verificarColisão(){
  for (let c = 0; c < imagemCarro.length; c++){
    colidiu = collideRectRect(xCarros[c], yCarros[c], larguraCarros[c], alturaCarros[c], xYoda, yYoda, larguraYoda, alturaYoda);
    if (colidiu){
      colisao.play();
      voltaYodaPosicaoInicial();
      if (pontuacao > 0){
        pontuacao -= 1;
      }

    }
  }  
}

function voltaYodaPosicaoInicial(){
  yYoda = 640;
  xYoda = 60;
}

function incluirPlacar(){
  textSize (28);
  fill (0);
  text("Pontuação", 350, 40);
  fill (color(255,215,0));
  rect (300, 15, 30,30);
  fill (0);
  text (pontuacao, 307,40);
}

function marcarPontos(){
  if (yYoda < 60 ){
    pontuacao += 1;
    ponto.play();
    voltaYodaPosicaoInicial();
  }
}

function podeSeMover(){
  return yYoda < 640;  
}
