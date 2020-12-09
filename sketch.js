
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var ground1;
var tree1;
var stone1;
var fruit1;
var fruit2,fruit3,fruit4,fruit5;
function preload()
{
	boyImage = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
	 ground1 = new ground(0,550,1800,20);

fruit1 = new mango(620,250,20,50);
stone1 = new stone(110,400,20,50);
tree1 = new tree(635,300,400,500);
fruit2 = new mango(580,138,20,50);
fruit3 = new mango(670,250,20,50);
fruit4 = new mango(540,180,20,50);
fruit5 = new mango(550,230,20,50);
slingshot = new SlingShot(stone1.body,{x:200, y:50});
tree1.scale = 3.0;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImage,100,350,100,250);
  drawSprites();
 ground1.display();
 tree1.display();
 stone1.display();
 fruit1.display();
 fruit2.display();
 fruit3.display();
fruit4.display();
slingshot.display();
fruit5.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone1.body);
    }
}


