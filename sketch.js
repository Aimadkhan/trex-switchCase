var score=0
var trex ,trex_running; 

 function preload(){
   trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
   groundImage = loadImage("ground2.png")
   cloudimg = loadImage("cloud.png")
   obstacleimg1 = loadImage("obstacle1.png")
   obstacleimg2 = loadImage("obstacle2.png")
   obstacleimg3 = loadImage("obstacle3.png")
   obstacleimg4 = loadImage("obstacle4.png")
   obstacleimg5 = loadImage("obstacle5.png")
   obstacleimg6 = loadImage("obstacle6.png")

}

function setup(){
 createCanvas(600,200)
  
  //create a trex sprite
  
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running);
  trex.scale=0.5;

  ground = createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
   invisibleGround = createSprite(200,190,400,10);
   invisibleGround.visible = false;

   var raNum = Math.round(random(10,50))
   console.log(raNum)
}


function draw(){

  background(180)
  ground.velocityX=-12   
  //console.log(trex.y)
  
  if (ground.x<0){
    ground.x = ground.width/2;
  } 
    
if(keyDown("SPACE")&(trex.y>=150)){
  trex.velocityY=-13 
       
}
trex.velocityY=trex.velocityY+0.8;  
trex.collide(invisibleGround);
spawnClouds()
spawnObstacles()
text("Score : "+score,300,50)
score= score+Math.round(frameCount/120)         
  drawSprites();

}

function  spawnClouds()
{
  if(frameCount %60===0){

  
 cloud = createSprite(600,100,40,10)
 cloud.velocityX=-3
 cloud.y=Math.round(random(10,60))
 cloud.addImage(cloudimg)
 cloud.scale=0.5

 cloud.lifetime=200  
 console.log(trex.depth)
 cloud.depth = trex.depth;
 trex.depth = trex.depth + 1;
}
}
 
function spawnObstacles()
{
  if(frameCount %120===0){ 
obstacle = createSprite(600,165,10,40)
obstacle.velocityX=-3
var randomNum = Math.round(random(1,6))
switch(randomNum) {
  case 1: obstacle.addImage(obstacleimg1);
          break;
  case 2: obstacle.addImage(obstacleimg2);
          break;
  case 3: obstacle.addImage(obstacleimg3);
          break;
  case 4: obstacle.addImage(obstacleimg4);
          break;
  case 5: obstacle.addImage(obstacleimg5);
          break;
  case 6: obstacle.addImage(obstacleimg6);
          break;
  default: break;
}

//assign scale and lifetime to the obstacle           
obstacle.scale = 0.5;
obstacle.lifetime = 300;
  }
}