var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload() {
car1_image=loadImage("images/monkey1.png.jpg");
car2_image=loadImage("images/monkey2.png.jpg");
car3_image=loadImage("images/monkey3.png.jpg");
car4_image=loadImage("images/monkey4.png.jpg");
ground_image=loadImage("images/ground.png");
track_image=loadImage("images/track.jpg");
//track_image=loadImage("images/track.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
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
