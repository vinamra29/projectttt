class game {
    constructor (){

    }
    getState (){
        var gameStateref = database.ref('gameState')
        gameStateref.on("value",(data)=>{
            gameState = data.val()
        })
    }
    update (state){
    database.ref ('/').update({
        gameState : state
    })

    }
    async start (){
         p = new player ()
         var playerCountref = await database.ref('playerCount').once("value");
         
    }
}