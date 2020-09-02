class Level2 {

    constructor(){

        this.obstacle1;
        this.obstacle2;
        this.obstacle3;
        this.obstacle4;

    }

    display(){



    this.obstacle1 = createSprite(100,50,10,10);
    this.obstacle2 = createSprite(210,100,10,10);
    this.obstacle3 = createSprite(50,100,10,10);
    this.obstacle4 = createSprite(100,200,10,10);
  
    obstacleGroup.add(this.obstacle1);
    obstacleGroup.add(this.obstacle2);
    obstacleGroup.add(this.obstacle3);
    obstacleGroup.add(this.obstacle4);
    }

    destroyAll(){
        
        obstacleGroup.destroyEach();


    }






}