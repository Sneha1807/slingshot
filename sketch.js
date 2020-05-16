const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
var world,engine,canvas
function setup() {
  canvas=createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
//last row
  //box1=new Box(1150,200,40,40);
  box2=new Box(1130,200,40,40);
  box3=new Box(1090,200,40,40);
  box4=new Box(1050,200,40,40);
  box5=new Box(1010,200,40,40);
  box6=new Box(970,200,40,40);

//second-last row
  box7=new Box(1110,100,40,40);
  box8=new Box(1070,100,40,40);
  box9=new Box(1030,100,40,40);
  box10=new Box(990,100,40,40);

//third-last row
  box11=new Box(1090,0,40,40);
  box12=new Box(1050,0,40,40);
  box13=new Box(1010,0,40,40);

//fourth-last row
  box14=new Box(1070,-100,40,40);
  box15=new Box(1030,-100,40,40);

//first row
  box16=new Box(1050,-200,40,40);

//ground  
  ground=new Ground(1050,300,300,5);

//slingshot
  ball=new Ball(400,200,80);
  sling=new Sling(ball.body,{x:400,y:200});
}

function draw() {
  background(0);  
  Engine.update(engine);
  //box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ground.display();
  ball.display();
  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}