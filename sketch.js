

var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
fruit3, fruit4, fruitG, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage
var PLAY=1
var END=0
var gameState=PLAY



function preload(){
swordImage= loadImage("sword.png")
enemyImage=loadAnimation("enemy.gif")
fruit1Image=loadImage("apple.png")
fruit2Image=loadImage("banana.png")
fruit3Image=loadImage("pineapple.png")
fruit4Image=loadImage("Strawberrie.png")
background1=loadImage("background.gif")
gameOverImage=loadImage("Game_over.png")
//gameOverImage=loadImage("gameover.png")

}

function setup(){
createCanvas(windowWidth,windowHeight);

sword=createSprite(200,200,100,100)
sword.addImage(swordImage)
sword.scale=0.5



enemyG= new Group()
fruitG= new Group()

score=0


}

function draw(){
background(background1);



if (gameState===PLAY) {
sword.x=World.mouseX
sword.y=World.mouseY

var select_item = Math.round(random(1,5));
if (World.frameCount%100===0){
if (select_item == 1) {
  fruit1()
} else if (select_item == 2) {
  enemy()
} else if (select_item == 3) {
  fruit2()
} else if (select_item == 4){
  fruit3()
} else {
  fruit4()
}
 }

if(sword.isTouching(fruitG)){
 fruitG.destroyEach()
score=score+1

 }

else
 
if(sword.isTouching(enemyG)){
 enemyG.destroyEach()
gameState=END;
 fruitG.destroyEach()
 enemyG.setVelocityXEach(0)
 fruitG.setVelocityXEach(0)
 sword.addImage(gameOverImage)
 sword.scale=0.45
 sword.x=300
 sword.y=200
 
 
 }
}







drawSprites();
fill("Black");
textSize(20);
textStyle("bold");
text("Score: "+ score, 50,50);

fill("red");
textSize(50)
textStyle("bold");
textFont("Aref Ruqaa Ink")
text("Food Fiesta",windowWidth/2,windowHeight-550);
}

function enemy(){

var enemy=createSprite(600,Math.round(random(30,400)),10,10)

enemy.addAnimation("enemy_blinking",enemyImage)
enemy.velocityX=-6
enemy.scale=0.2
enemy.lifetime=150
enemyG.add(enemy)

}

function fruit1(){
var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
fruit1.addImage(fruit1Image)
fruit1.velocityX=-6
fruit1.scale=0.02
fruit1.lifetime=150
fruitG.add(fruit1)
}

function fruit2(){
var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
fruit2.addImage(fruit2Image)
fruit2.velocityX=-6
fruit2.scale=0.02
fruit2.lifetime=150
fruitG.add(fruit2)
}

function fruit3(){
var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
fruit3.addImage(fruit3Image)
fruit3.velocityX=-6
fruit3.scale=0.07
fruit3.lifetime=150
fruitG.add(fruit3)
}

function fruit4(){
var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
fruit4.addImage(fruit4Image)
fruit4.velocityX=-6
fruit4.scale=0.02
fruit4.lifetime=150
fruitG.add(fruit4)
}
