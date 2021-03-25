var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, 2,10);
	groundSprite.shapeColor=color(255)

	wall1 = createSprite(width/2, 670, 200, 20)
	wall1.shapeColor = "red"

	wall2 = createSprite(290, 640, 20, 80)
	wall2.shapeColor = "red"

	wall3 = createSprite(510, 640, 20, 80)
	wall3.shapeColor = "red"
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	//Matter.Body.setStatic(wall1Body, false)
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	keyPressed();
	drawSprites();	
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	packageBody.restitution = 0.5
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false)
    
  }
}



