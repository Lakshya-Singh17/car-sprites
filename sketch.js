var position,database;
var gameState = 0;
var form,game,player;
var playerCount;
var Distance = 0;
var allPlayers;
var car1,car2,car3,car4;
var cars;

function setup(){
    createCanvas(displayWidth - 30, displayHeight - 30);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 4){
        game.update(1);
    
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}
