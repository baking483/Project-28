var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	bin = new Bin();
	paper1 = new Paper(200,200);
	
	//bin2 = new Bin(700,690,20,400);
	//bin3 = new Bin(560,690,20,200);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 ground = new Ground();
	 World.add(world, ground);
	 constraint = new Launcher(paper1.body,{x:200, y:100});

	
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  bin.display();
  paper1.display();
  constraint.display();
  
  //bin2.display();
  //bin3.display();

  //mouseDragged();
  //mouseReleased();
  drawSprites();
 
}

/*
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

	}
}
*/

function mouseDragged(){
    Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    constraint.fly();
}