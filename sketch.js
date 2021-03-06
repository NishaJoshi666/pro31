const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1, ground;

function setup() {
  var convas = createCanvas(480,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Division(15,320,10,170);
  box2 = new Division(110,320,10,170);
  box3 = new Division(200,320,10,170);
  box4 = new Division(290,320,10,170);
  box5 = new Division(380,320,10,170);
  box6 = new Division(465,320,10,170);
  particle1 = new particles(220,0,20);
  particle2 = new particles(200,0,20);
  particle3 = new particles(200,0,20);
  particle4 = new particles(300,0,20);
  particle5 = new particles(340,0,20);
  particle6 = new particles(350,0,20);
  particle7 = new particles(400,0,20);
  particle8 = new particles(400,0,20);
  particle9 = new particles(300,0,20);
  particle10 = new particles(200,0,20);
  particle11 = new particles(200,0,20);
  particle12 = new particles(220,0,20);
  particle13 = new particles(220,0,20);
  particle14 = new particles(220,0,20);
  particle15 = new particles(220,0,20);
  particle16 = new particles(220,0,20);
  particle17 = new particles(220,0,20);
  particle18 = new particles(220,0,20);
  particle19 = new particles(220,0,20);
  particle20 = new particles(220,0,20);
  particle21 = new particles(220,0,20);
  particle22 = new particles(220,0,20); 
  particle23 = new particles(220,0,20);
  particle24 = new particles(220,0,20);
  particle25 = new particles(220,0,20);
  particle26 = new particles(220,0,20);
  particle27 = new particles(220,0,20);
  particle28 = new particles(220,0,20);
  particle29 = new particles(220,0,20);
  particle30 = new particles(220,0,20);
  particle31 = new particles(220,0,20);
  particle32 = new particles(220,0,20);
  particle33 = new particles(220,0,20);
  particle34 = new particles(120,0,20);
  particle35 = new particles(200,0,20);
  particle36 = new particles(220,0,20);
  particle37 = new particles(120,0,20);
  particle38 = new particles(300,0,20);
  particle39 = new particles(220,0,20);
  particle40 = new particles(220,0,20);
  wall1 = new Ground(5,200,10,410);
  wall2 = new Ground(475,200,10,410);
  ball = new plinko(100,100,20);
  ball2 = new plinko(200,100,20);
  ball3 = new plinko(300,100,20);
  ball4 = new plinko(400,100,20);
  ball5 = new plinko(500,100,20);
  ball6 = new plinko(600,100,20);
  ground = new Ground(240,395,490,10);

}

function draw() {
  background(0); 
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  wall1.display();
  wall2.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  particle16.display();
  particle17.display();
  particle18.display();
  particle19.display();
  particle20.display();
  particle21.display();
  particle22.display();
  particle23.display();
  particle24.display();
  particle25.display();
  particle26.display();
  particle27.display();
  particle28.display();
  particle29.display();
  particle30.display();
  particle31.display();
  particle32.display();
  particle33.display();
  particle34.display();
  particle35.display();
  particle36.display();
  particle37.display();
  particle38.display();
  particle39.display();
  particle40.display();
  ground.display(); 

}