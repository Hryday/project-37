var hypnoticBall, database;
var position;
var gameState, playerCount, allPlayers;
var player1, player2, player3, player4, players;
var canvas;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(displayWidth, displayHeight);
  game=new Game();
  game.getGameState();
  game.start();
}

function draw(){
  background("white");
if(playerCount===4){
  game.updateState(1);
}
if(gameState===1){
  clear();
  game.play();
}
}

