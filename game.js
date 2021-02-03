class Game{
    constructor(){

    }
    getGameState(){
        database.ref("gameState").on("value",(data)=>{gameState=data.val()});
    }
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
           player=new Player();
           var playerCountref= await database.ref("playerCount").once("value");
           if(playerCountref.exists()){
               playerCount=playerCountref.val();
               player.getCount();
           }
           form=new Form();
           form.display();
        }
        player1=createSprite(100,200);
        player2=createSprite(300,200);
        player3=createSprite(500,200);
        player4=createSprite(700,200);
        players=[player1,player2,player3,player4]
    }
    play(){
       form.hideAll();
       Player.playerInfo();
       if(allPlayers!==undefined){
           var index=0;
           var x=0;
           var y;
           for(var plr in allPlayers){
               index=index+1;
               x=x+200;
               y=displayHeight-allPlayers[plr].distance;
               players[index-1].x=x;
               players[index-1].y=y;
               if(index===player.index){
                   players[index-1].shapeColor="red";
                   camera.position.x=displayWidth/2;
                   camera.position.y=players[index-1].y;
               }
           }
       }
       if(keyIsDown(UP_ARROW)&&player.index!==null){
           player.distance +=10;
           player.updateInfo();
       }
       drawSprites();
    }
}