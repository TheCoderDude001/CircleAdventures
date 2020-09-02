var power, player, playerImg, ground, door, level2, level3, level4, level5, level6, powerParameter, pellet, pelletParameter, obs1;

var levelIndicator = 1
var score = 0;
var lives = 3;




function preload(){

  playerImg = loadImage("costume1.png")

  powerImg = loadImage("shield.png")

}

function setup() {

  createCanvas(800,400);

  player = createSprite(50,50, 10, 10);
  player.addImage("player", playerImg);
  player.scale = 0.5


  pellet = createSprite(random(0,75),-5,random(10,50),random(10,20));
  pellet.velocityY = 0

  power = createSprite(0,0,30,30); 
  power.addImage("power", powerImg)
  power.visible = false
  power.scale = 0.5
  pelletParameter = false
  power.debug = true

  ground = createSprite(400,400, 800, 10)
  door = createSprite(780, 380, 30, 70)
  door.shapeColor = "blue"

  level2 = new Level2
  level3 = new Level3
  level4 = new Level4
  level5 = new Level5
  level6 = new Level6



  obstacleGroup = new Group();
  lavaGroup = new Group();
  enemyGroup = new Group();

  powerGroup = new Group();

}

function draw() {
  background("white");  
  textSize(25)
  text("Score: " + score, 600, 30);
  text("Lives: " + lives, 600, 60);

  print(levelIndicator)

  
  if(lives === 0){
    DestroyAllLevels();
    levelIndicator -= 1;
    lives = 3

  }
  if (levelIndicator === 2){
    level2.display();
  } else if (levelIndicator === 3){
    level3.display();
  } else if (levelIndicator === 4){
    level4.display();
  } else if (levelIndicator === 5){
    level5.display();
  }else if (levelIndicator === 6){  
    level6.display();

    obs1 = createSprite(random(50,750),-5,random(10,50),random(10,20));


    if(pelletParameter === false){
      obs1.lifetime = 500
      obs1.velocityY = 1;
      console.log("hello")

 
 
    }

    pellet.velocityY = 5

    pellet.shapeColor = "purple"

    
      

      enemyGroup.add(obs1);

    powerGroup.add(pellet);


      if(pellet.isTouching(player)){
        powerGroup.destroyEach();
        powerParameter = true
        pelletParameter = true

  

      } else if(pellet.isTouching(ground)){
        powerGroup.destroyEach();
        pelletParameter = true
        
      }

      if(pelletParameter === true){
        obs1.velocityY = 6;
       obs1.lifetime = 100;
       

        obs1.collide(power)

       
      }
      


    }
  
  

  player.velocityY = 10
  player.velocityY += -4

  player.velocityX = 0


  power.collide(obstacleGroup)
  power.collide(ground)
  player.collide(ground)
  player.collide(obstacleGroup)





  if(keyDown(UP_ARROW)){
    player.velocityY = -20
  }

  if(keyDown(DOWN_ARROW)){
    player.velocityY = 20
  }

  if(keyDown(LEFT_ARROW)){
    player.velocityX = -10
  }

  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 10
  }

  if(player.isTouching(door)){
    DestroyAllLevels();
    levelIndicator += 1;
    score += 100

    Reset();
  }

  if(player.isTouching(powerGroup)){

    powerParameter = true;
    
  }

  if(powerParameter === true){

    power.visible = true

    power.x = player.x + 10
    power.y = player.y + 10

  } else {
    power.visible = false

    power.x = 0
    power.y = 0

  }

  if(player.isTouching(lavaGroup) || player.isTouching(enemyGroup)){
   
    DecReset();
  }

  drawSprites();

}

function DestroyAllLevels(){

  level2.destroyAll();
  level3.destroyAll();
  level4.destroyAll();
  level5.destroyAll();
  level6.destroyAll();

  powerParameter = false

}
function Reset(){


  player.x = 50
  player.y = 50

  powerParameter = false

}

function DecReset(){

  lives -= 1;
  score -= 50
  player.x = 50
  player.y = 50

  powerParameter = false

}
