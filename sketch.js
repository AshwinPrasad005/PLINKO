var engine,world,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(300,600);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0;k <=width; k = k + 80){
    divisions.push(new Division(k , height-divisionHeight/2, 10 , divisionHeight))
  }

  ground = new Ground(150,590,300,20);

}

function draw() {
  background(80,80,80); 

  Engine.update(engine);

  ground.display();
  divisions.display();

  drawSprites();
}