
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(900, 700);

	background("blue");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(150, 50, 90, 90);
	hammer = new Hammer(500, 400, 100, 20);
	plane = new Plane(0, 600, 5000, 5);
	rubber = new Rubber(10, 10, 2);

	Engine.run(engine);
  
}


function draw() {
	background(255);
	Engine.update(engine);


	hammer.display();
	plane.display();
	stone.display();
	rubber.display();

	if(stone.isTouching(Plane) && rubber.isTouching(Plane))
	{
		plane.velocityX = 0;
	}

  drawSprites();
 
}



