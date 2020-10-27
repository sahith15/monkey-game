
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup;
var obstacle, obstacleimg,obstacleGroup;
var score;
var ground,groundimg;
var ground, invisibleGround, groundImage;


function preload(){
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
groundimg=loadImage("ground.png");
}


function setup() {
  createCanvas(600, 400);
  invisibleGround = createSprite(400,380,900,10);
  invisibleGround.visible = false;
 
  
  
  
  obstacleGroup=new Group();
  bananaGroup=new Group();

}

function draw() {
  background("220");
  
  //creating a monkey
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  if(keyDown("space")){
     monkey.velocityY=-100;
     }
//console.log(monkey.y) 
  
  if (monkey.y<350){
   monkey.velocityY=-8 ;
  }
  //creating ground
  ground=createSprite(400,380,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 // console.log(ground.x);
  
  monkey.collide (invisibleGround);
  
  
  
stroke("white");
  textSize=20;
  fill=("white");
  text("score: "+score,400,50); 
  
  var survivalTime=0;
  
  stroke("white");
  textSize=20;
  fill=("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50);
  
  drawSprites();
}

function spawnObstacle(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
}
  
  
  
  
  obstacleGroup.add(obstacle);
}


