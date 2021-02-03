class Form{
    constructor(){
        this.input=createInput("Enter your name");
        this.button=createButton("PLAY");
        this.greeting=createElemet("h2");
        this.title=createElement("h1");
    }
    display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.updateInfo();
        player.updateCount(playerCount);
        this.greeting.html("Hello!"+player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
    })
    }
    hideAll(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.input.hide();
    }
}