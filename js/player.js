class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var PlayerCountRef = database.ref('playerCount');
        PlayerCountRef.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        });

    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }
    static getPlayerInfo(){
        var PlayerInfoRef = database.ref('players');
        PlayerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }


}