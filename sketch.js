var db,game,player,form,playerCount,gameState=0;
var players, cars, car1, car2, car3, car4

function preload(){
    car1img=loadImage("car1.png")
    car2img=loadImage("car2.png")
    car3img=loadImage("car3.png")
    car4img=loadImage("car4.png")
    trackimg=loadImage("track.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    db = firebase.database()
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
   if(playerCount===4){
    game.updateState(1)
}
if(gameState===1){
    clear()
    game.play()
}
 if(gameState===2){
    game.end()
 }  
}

