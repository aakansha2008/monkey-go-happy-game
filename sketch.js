var banana,bananaImage
var obstacle,obstacleImage
var backImage,back
var obstacleGroup
var score
var player,playerImage
var foodGroup,foodImage,food
var gameState="play";
var gameOver,gameOverImage
var restart,restartImage
function preload () {
  bananaImage=loadImage ("Banana.png");
  
  playerImage=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");  
 
    backImage=loadImage("jungle2.jpg");
  obstacleImage=loadImage("stone.png");
  
  foodImage=loadImage("Bananas.png");
  
  //restartImage=loadImage("restart.png");
  //gameOverImage=loadImage("gameOver.png");
}




function setup() {
  createCanvas(800, 400);
   
 
  back = createSprite(0, 0, 800, 400);
  back.addImage(backImage);

  player = createSprite(100, 100 , 20, 50);
  player.addAnimation("Running", playerImage);
  player.scale = 0.2;
  
   ground=createSprite(270,377,500,15);
   ground.visible=false;
  
 
   obstacleGroup= new Group ();
  foodGroup= new Group ();
  
  // restart=createSprite(400,200,10,10);
//  restart.addImage(restartImage);
 // restart.visible=false;
  
 // gameOver=createSprite(400,190,10,10);
  //gameOver.addImage(gameOverImage);
  //gameover.visible=false;
  score = 0;
}

function draw() {
  background(220);
  
  
  if(keyDown(UP_ARROW)){
    player.velocityY=-12;
  }
  
  player.velocityY = player.velocityY + 0.8;
  
  player.collide (ground);
  
  if( back.x <0){
   back.x = back.width /2;
 }
  
  back.velocityX=-5;

if (frameCount % 100 === 0){
   var food = createSprite(250,100,10,10);
    food.addImage(foodImage);
    food.scale =0.04;
    food.velocityX = -3;
    food.lifetime = 800/3;
    foodGroup.add(food);
  }
  
  if (frameCount % 300=== 0){
    var obstacle = createSprite(250,360,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime = 400/3;
  }
  
  
  
  
  score.depth=back.depth;
  score.depth=score.depth +1
  
  if(player.isTouching(obstacleGroup)){
    player.scale=0.1;
    
  }
  
  if(player.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score=+2;
  }
  
  switch(score){
    case 10 :player.scale=0.12;
    break;
    case 20 :player.scale=0.14;
    break;
    case 30 :player.scale=0.16;
    break;
    case 40 :player.scale=0.18;
    break;
    default:break;
  }
  
  
  
  drawSprites();
  fill("red");
stroke("black");
textSize(20);
text("score:" + score,500,50);
}
  
  
  
  