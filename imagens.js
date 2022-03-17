//imagens
let imagemEstrada;
let personagem;
let carro1;
let carro2;
let carro3;
let carro4;
let carro5;
let carro6;
let carro1s;
let carro2s;
let carro3s;
let carro4s;
let carro5s;
let carro6s;

//variáveis sons
let colisao;
let ponto;
let trilhaSonora;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  personagem = loadImage("imagens/yoda-1.png")
  carro1 = loadImage("imagens/carro-1.png")
  carro2 = loadImage("imagens/moto.png")
  carro3 = loadImage("imagens/carro-3.png")
  carro4 = loadImage("imagens/caminhao.png")
  carro5 = loadImage("imagens/carro-2.png")
  carro6 = loadImage("imagens/carro-3.png")
  carro1s = loadImage("imagens/carro-2.png")
  carro2s = loadImage("imagens/caminhao.png")
  carro3s = loadImage("imagens/carro-1.png")
  carro4s = loadImage("imagens/carro-2.png")
  carro5s = loadImage("imagens/moto.png")
  carro6s = loadImage("imagens/carro-3.png")
    
  imagemCarro = [carro1, carro2, carro3, carro4, carro5, carro6, carro1s, carro2s, carro3s, carro4s, carro5s, carro6s];
  
  colisao = loadSound("sons/colidiu.mp3");
  ponto = loadSound("sons/pontos.wav");
  trilhaSonora = loadSound("sons/trilha.mp3");

}


