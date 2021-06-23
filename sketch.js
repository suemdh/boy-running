var boy,boy_running,coin,bomb,Energy,path,invisibleGround
var score;



function preload(){
  //pre-load images
boy_running=loadAnimation("Runner-1.png","Runner-2.png")
  pathImage=loadImage("path.png")
bomb=loadImage("bomb.png")
coin=loadImage("coin.png")
Energy=loadImage("energyDrink.png")
  
}

function setup(){
  createCanvas(600,600);
  //create sprites here

path=createSprite(300,200);
path.addImage("path",pathImage);
path.y= path.height /2;
path.velocityY=4;
path.scale=1.2

boy=createSprite(300,450,15,15)
boy.addAnimation("boy",boy_running)
boy.scale=0.1
}









function draw() {
  background(0);
  drawSprites();
  
  

  if (path.y > 600){
    path.y = height/2;  
  }
  
  





}
