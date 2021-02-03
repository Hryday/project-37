class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    static playerInfo(){
        database.ref("players").on("value", (data)=>{
            allPlayers=data.val();
        })
    }
    updateInfo(){
        database.ref("players/player"+this.index).update({
            playerName:this.name,
            distance:this.distance
        })
    }
}