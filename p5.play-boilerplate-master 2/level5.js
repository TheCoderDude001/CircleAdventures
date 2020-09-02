class Level5 {

    constructor(){

        this.obstacle1;
        this.obstacle2;
        this.obstacle3;
        this.obstacle4;
        this.lava1;
        this.lava2;
        this.lava3;
        

    }

    display(){



    this.obstacle1 = createSprite(200,100,10,10);
    this.obstacle2 = createSprite(300,300,10,10);
    this.obstacle3 = createSprite(100,200,10,10);
    this.obstacle4 = createSprite(100,150,10,10);
    this.lava1 = createSprite(200, 390, 50, 10);
    this.lava2 = createSprite(500, 390, 50, 10);
    this.lava3 = createSprite(100,300,10,10);

    lavaGroup.add(this.lava1);
    lavaGroup.add(this.lava2);
    lavaGroup.add(this.lava3);


    this.lava1.shapeColor = "red"
    this.lava2.shapeColor = "red"
    this.lava3.shapeColor = "red"
   

    obstacleGroup.add(this.obstacle1);
    obstacleGroup.add(this.obstacle2);
    obstacleGroup.add(this.obstacle3);
    obstacleGroup.add(this.obstacle4);
  

    }

    destroyAll(){
        obstacleGroup.destroyEach();
        lavaGroup.destroyEach();

    }





}