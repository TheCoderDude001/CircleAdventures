class Start {


    constructor(){
        this.settings = createButton("Settings");
        this.play = createButton("Play")
        this.levels = createButton("Levels")
        this.title = createElement("H2")
    }

    display(){

        this.play.position(350,100)
        this.levels.position(500,100)
        this.settings.position(100,100)
        this.title.html("Circle Adventures")     
        this.title.position(350, 50)

        this.play.mousePressed(()=>{

        });


        this.settings.mousePressed(()=>{

        });

        this.levels.mousePressed(()=>{

        });
        

        


    }



}