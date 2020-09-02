class Level3 {

    constructor(){

        this.obstacle1;
        this.obstacle2;
        this.obstacle3;
        this.obstacle4;
        this.lava;

    }

    display(){



    this.obstacle1 = createSprite(200,50,10,10);
    this.obstacle2 = createSprite(300,100,10,10);
    this.obstacle3 = createSprite(100,100,10,10);
    this.obstacle4 = createSprite(100,200,10,10);
    this.lava = createSprite(200, 390, 50, 10);

    this.lava.shapeColor = "red"
  
    obstacleGroup.add(this.obstacle1);
    obstacleGroup.add(this.obstacle2);
    obstacleGroup.add(this.obstacle3);
    obstacleGroup.add(this.obstacle4);
    lavaGroup.add(this.lava);

    }

    destroyAll(){
        
        obstacleGroup.destroyEach();
        lavaGroup.destroyEach();



    }





}