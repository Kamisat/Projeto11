//Desculpe o atraso para a entrega

var jardim,coelho;
var imagemdojardim,imagemdocoelho;

var selecionar,imagemMaca,imagemLaranja;

function preload(){
  imagemdojardim = loadImage("garden.png");
  imagemdocoelho = loadImage("rabbit.png");
  imagemMaca = loadImage("apple.png");
  imagemLaranja = loadImage("orangeLeaf.png");
}


function setup(){
  
  createCanvas(400,400);

jardim=createSprite(200,200);
jardim.addImage(imagemdojardim);


  

coelho = createSprite(160,340,20,20);
coelho.scale =0.09;
coelho.addImage(imagemdocoelho);
}

  

function draw() {
  background(0);
  
  selecionar = Math.round(random(1,4));

  if (World.frameCount % 80 == 0) {
    
    if (selecionar == 1) {
      
      criarMaca();
      
    }else{
      
      criarLaranja();
      
    }
    
  }
  
  coelho.x = mouseX;
  
  bordas = createEdgeSprites();
  coelho.collide(bordas);
  
   

   drawSprites();
  
  

 
}

  function criarMaca() {
 var maca = createSprite(random(50,350),40,10,10);
    maca.velocityY = 3;
    maca.addImage("Maçã", imagemMaca);
    maca.lifetime = 130;
    maca.scale = 0.1;
  }


    function criarLaranja() {
 var laranja = createSprite(random(50,350),40,10,10);
    laranja.velocityY = 3;
    laranja.addImage("Folha laranja", imagemLaranja);
    laranja.lifetime = 130;
    laranja.scale = 0.1;
  }