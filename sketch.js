var engine,world,ground,divisions,division,particles,plinkos,divisionHeight;

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
  createCanvas(300,600);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0;k < width; k = k + 80){
    divisions.push(division = new Division(k , height-divisionHeight/2, 10 , divisionHeight));
  }

  ground = new Ground(150,590,300,20);

}

function draw() {
  background(80,80,80); 

  Engine.update(engine);

  ground.display();
  division.display();

  drawSprites();
}