
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var block1,block2,block3,block4,block5;
var Log;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Bob(250,300);
	ball2 = new Bob(280,300);
	ball3 = new Bob(310,300);
	ball4 = new Bob(340,300);
	ball5 = new Bob(370,300);

	block1 = new Ground(280,150,10,10);
	block2 = new Ground(220,150,10,10);
	block3 = new Ground(380,150,10,10);
	block4 = new Ground(330,150,10,10);
	block5 = new Ground(430,150,10,10);

	chain1 = new Suspender(ball1.body,block2.body,10*2,0);
	chain2 = new Suspender(ball2.body,block1.body,10*2,0);
	chain3 = new Suspender(ball3.body,block4.body,10*2,0);
	chain4 = new Suspender(ball4.body,block3.body,10*2,0);
	chain5 = new Suspender(ball5.body,block5.body,10*2,0);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("#1C2ECF");

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  chain1.display();
  chain2.display(); 
  chain3.display(); 
  chain4.display();
  chain5.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  
  drawSprites();
 
}
function mouseDragged()
{
   
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
   
}
function mouseReleased()
{
  Matter.Body.setPosition(ball1.body,{x:ball1.body.position.x,y:ball1.body.position.y});
}
function keyPressed()
{
  if(keyCode === 32){
  }
}