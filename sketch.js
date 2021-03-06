var ob1,ob2,ob3,ob3,ob4,ob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	
	ob1 = new Ball(320,500,40);
	ob2 = new Ball(360,500,40);
	ob3 = new Ball(400,500,40);
	ob4 = new Ball(440,500,40);
	ob5 = new Ball(480,500,40);
	
	rope1 = new Rope(ob1.body,{x:320,y:200});
	rope2 = new Rope(ob2.body,{x:360,y:200});
	rope3 = new Rope(ob3.body,{x:400,y:200});
	rope4 = new Rope(ob4.body,{x:440,y:200});
	rope5 = new Rope(ob5.body,{x:480,y:200});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Matter.Engine.update(engine);




  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ob1.body,ob1.body.position,{x:-50,y:45})
	}
} 

