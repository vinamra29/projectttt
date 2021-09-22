class form {
    constructor (){
        this.input = createInput("ENTER YOUR NAME")
        this.button = createButton ("PLAY")
        this.greeting = createElement ("h2")
        this.title = createElement ("h1")
        this.reset = createButton ("NEW GAME")
    }
        hide (){
            this.greeting.hide()
            this.input.hide()
            this.button.hide()
            this.title.hide()
        }
        display (){
            this.title.html("FISHUP")
            this.title.position (300,100)
            this.input.position (300,150)
            this.button.position (600,500)
            this.reset.position (1500,100)
            this.button.mousePressed(()=>{
                this.input.hide ()
                this.button.hide()
                p.name = this.input.value ()
                playerCount = playerCount +1
                p.index = playerCount
                p.update ()
                p.updateCount(playerCount)
                this.greeting.html("WELCOME TO THE GAME"+p.name)
                this.greeting.position (500,200)

            })
            this.reset.mousePressed (()=>{
                p.updateCount(0)
                g.update (0)
                

            })
        }
}