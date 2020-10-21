var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score = 0;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");    
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(180);
  
  //the score
  score = score+Math.round(getFrameRate()/60);
  text("Score:" + score, 500,50);
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8

  camera.position.x = trex.x+500;
  
  //making the trex visible on the screen
  if(trex.x>=dist-displayWidth){
  if(flag ==0){
  ground2.x=dist+ground.width/2;
  invisibleGround2.x=ground2.x;
  flag=1;
  }
  
  else {
  ground.x=dit+ground.width/2;
  invisibleGround.x=ground.x;
  flag=0;;
  }
  dist+=ground.width;

  // DOUBT - ASK TEACHER 
  
  
  }
  


  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  

  //making the game end.
  if(trex.isTouching(obstaclesGroup)){
  game.end();
  }
 
spawnObstacles();
spawnClouds();
  
  
  drawSprites();
}

function spawnClouds () {
if (frameCount%60===0) {
    
    //creating the sprite
    var cloud = createSprite(600,120,40,10);
    
    //making clouds appear at different heights of the game.
    cloud.y = Math.round (random(80,120));
    
    //the animation
    cloud.addImage(cloudImage);
    
    //the size, speed and  memory 
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.lifetime = 134;
    
    //making sure the clouds and trex don't merge with each other when the trex jumps.
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;

    camera.position.x = displayWidth/2;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles(){
if (frameCount%60 === 0) {
  
var obstacle = createSprite(600,165,10,40);
  
obstacle.velocityX = -3;
  
var rand = Math.round(random(1,6));
  
switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6); 
              break;
           
           default: break;

// DOUBT - ASK TEACHER 
}
 
  obstacle.scale=0.5;
  obstacle.lifetime=150;
  obstaclesGroup.add(obstacle);

}
}
















