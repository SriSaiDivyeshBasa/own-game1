var bruse,bruseImg;
var daniel,danielImg;
var david,davidImg;

var hero,heroImg;

function preload(){
  bruseImg=loadImage("buse egited.png");
  danielImg=loadImage("edited daniel.png");
  davidImg=loadImage("edited david.png");
  heroImg=loadImage("edited hero.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  bruse=createSprite(99, 100, 50, 50);
  bruse.addImage(bruseImg);
  bruse.scale=(0.5);

  daniel=createSprite(150, 450, 50, 50);
  daniel.addImage(danielImg);
  daniel.scale=(0.5);

  david=createSprite(99, 100, 50, 50);
  david.addImage(davidImg);
  david.scale=(0.5);

  hero=createSprite(99, 100, 50, 50);
  hero.addImage(heroImg);
  hero.scale=(0.5);
}

function draw() {
  background("black");  
  drawSprites();
}