class Game{
    constructor(){

    }

    //read the gameState value from the database
    getState(){
        db.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //writing the gameState value to the database
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }

    start(){
      if(gameState===0){
          player = new Player()
          player.getCount()
          form = new Form()
          form.display()
      }  
car1=createSprite(100,200)      
car2=createSprite(300,200)      
car3=createSprite(500,200)      
car4=createSprite(700,200) 
cars = [car1,car2,car3,car4] 
car1.addImage(car1img)
car2.addImage(car2img)
car3.addImage(car3img)
car4.addImage(car4img)    
    }

    play(){
        form.hide()
        Player.getplayersinfo()
        if(players!==undefined){
            background("darkgray")
            image(trackimg,0,-height*4,width,height*5)
            
            var index = 0
            var x = 175
            var y;
            for (var i in players){
                index+=1
                x += 200
                y= height-players[i].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index===player.index){
fill("black")
ellipse(x,y,60)
                camera.position.x=width/2
                camera.position.y=cars[index-1].y
                }
            }
        }
     if(keyDown("up")&& player.index !== null){
         player.distance+=10
         player.updateInfo()
     }   
     player.getcarsatend()
     if(player.distance>3000){
         gameState=2
         player.rank+=1
         Player.updatecarsatend(player.rank)
     }
     drawSprites()
    }

    end(){
        console.log("GAME OVER")
        console.log(player.rank)
    }
}