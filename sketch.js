const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var floor1, box1, polygon;
var sling;

function setup() {
 createCanvas(1000, 550);
engine = Engine.create();
world = engine.world;



polygon = new Polygon(100, 300, 70);

stand1 = new Ground(390,300,250,10);
stand2 = new Ground(700,200,200,10);

//level one
block1 = new Block(300,275,30,40,"blue");

block2 = new Block(330,275,30,40,"blue");
block3 = new Block(360,275,30,40,"blue");
block3 = new Block(360,275,30,40,"blue");
block4 = new Block(390,275,30,40,"blue");
block5 = new Block(420,275,30,40,"blue");
block6 = new Block(450,275,30,40,"blue");
block7 = new Block(480,275,30,40,"blue");
//level two
block8 = new Block(330,235,30,40,"green");
block9 = new Block(360,235,30,40,"green");
block10 = new Block(390,235,30,40,"green");
block11 = new Block(420,235,30,40,"green");
block12 = new Block(450,235,30,40,"green");
//level three
block13 = new Block(360,195,30,40,"red");
block14 = new Block(390,195,30,40,"red");
block15 = new Block(420,195,30,40,"red");
//top
block16 = new Block(390,155,30,40,"yellow");

//set 2 for second stand
//level one
blocks1 = new Block(640,175,30,40,"blue");
blocks2 = new Block(670,175,30,40,"blue");
blocks3 = new Block(700,175,30,40,"blue");
blocks4 = new Block(730,175,30,40,"blue");
blocks5 = new Block(760,175,30,40,"blue");
//level two
blocks6 = new Block(670,135,30,40,"green");
blocks7 = new Block(700,135,30,40,"green");
blocks8 = new Block(730,135,30,40,"green");
//top
blocks9 = new Block(700,95,30,40,"red");

sling= new SlingShot(polygon.body,{x:150, y:250});

Engine.run(world, engine);
}
function draw() {
  background(0);  
  Engine.update(engine);
  stand1.display();
  stand2.display();
 
  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();
 
  block16.display();
 
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();

  sling.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  sling.fly();
}