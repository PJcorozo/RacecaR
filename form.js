class Form{
    constructor(){
         this.title = createElement("h1")
         this.input = createInput("name")
         this.button = createButton("Play")
         this.greeting = createElement("h2")
         this.reset = createButton("Reset")
    }

    hide(){
        this.input.hide()
        this.button.hide() 
        this.title.hide()
        this.greeting.hide()
    }

    display(){
        
        this.title.html("Car Racing")
        this.title.position(130,0)
        this.reset.position(width-100,20)

        
        this.input.position(130,160)

        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
          player.name = this.input.value()
            playerCount++
            player.index=playerCount
            player.updateCount(playerCount)
            player.updateInfo()

            this.greeting.html("Hello "+ player.name )
            this.greeting.position(130,160)
        })
        this.reset.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            Player.updatecarsatend(0)
            window.location.reload()
        })
    }
}