
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ball,ground1,ground2,can1,can2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var ball_options={
 isStatic:false,
 restitution:0.3,
 friction:0,
 density:1.2
}
	//Create the Bodies Here.
ball=Matter.Bodies.circle(30,20,25,ball_options)
ground1=new Ground(width/2,670,width,20);
ground2=new Ground(1100,600,20,120);
can1=new Ground(600,630,10,100);
can2=new Ground(775,630,10,100);
	Engine.run(engine);
  World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();
  can1.display()
  can2.display()
  ellipse(ball.position.x,ball.position.y,50)
  
 
 
 
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 40, y: -150});

	}
}

