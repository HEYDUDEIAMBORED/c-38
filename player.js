class Player{


    constructor(){ 
        this.index=null
        this.distance=0
        this.name = null
        
    }

    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }

   /* update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({name : this.name , distance:this.distance});
    }*/
    static getPlayerInfo(){
        var playerInfoRef=database.ref('players');
        //Arrow function is used for callback. it binds the property with class not with object
        playerInfoRef.on("value",(data)=>{allPlayers=data.val()})
    }
    
    
}