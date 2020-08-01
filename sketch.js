var engine,world,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;  

  ground = new Ground(300,590,600,20);
}

function draw() {
  background(80,80,80); 
  engine.update(Engine); 

  ground.display();

  drawSprites();
}