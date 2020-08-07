var engine,world,ground,divisions,division1,division2,division3,division4,division5,division6,particles,plinkos,divisionHeight;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

particles = [];
plinkos = [];
divisions = [];

divisionHeight = 300;

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,590,400,20);

  division1 = new Division(5,height-divisionHeight/2,10,divisionHeight);
  division2 = new Division(80,height-divisionHeight/2,10,divisionHeight);
  division3 = new Division(160,height-divisionHeight/2,10,divisionHeight);
  division4 = new Division(240,height-divisionHeight/2,10,divisionHeight);
  division5 = new Division(320,height-divisionHeight/2,10,divisionHeight);
  division6 = new Division(395,height-divisionHeight/2,10,divisionHeight);

  for (var k = 0;k < width; k = k + 80){
    divisions.push(new Division(k , height-divisionHeight/2, 10 , divisionHeight));
  }

}

function draw() {
  background(80,80,80); 

  Engine.update(engine);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  drawSprites();
}