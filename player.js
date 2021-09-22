class player {
    constructor (){
        this.index = null
        this.score = 0
        this.name = null

    }
    getCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on("value",(data)=>{
            playerCount = data.val()
        })
    }
    updateCount (count){
    database.ref('/').update({
        playerCount : count
    })
    }
    update (){
        var playerIndex = "player/player"+playerCount
        database.ref(playerIndex).set({
            name:this.name,
            score : this.score
        })
    }
    static getPlayerinfo(){
        var playerInforef = database.ref('player')
        playerInforef.on("value",(data)=>{
            allPlayers = data.val ()
        })
    }
}