var engine,world,ground,divisions,division1,division2,division3,division4,division5,division6,particles,particle1,plinkos,divisionHeight;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

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

  for( var j = -25; j <=width; j=j+50){
    plinkos.push( new Plinko(j,75,10))
  }

  for( var j = -50; j <=width; j=j+50){
    plinkos.push( new Plinko(j,125,10))
  }

  for( var j = -25; j <=width; j=j+50){
    plinkos.push( new Plinko(j,175,10))
  }

  for( var j = -50; j <=width; j=j+50){
    plinkos.push( new Plinko(j,225,10))
  }

}

function draw() {
  background(80,80,80); 

  Engine.update(engine);

  if(frameCount%30===0){
    particles.push(new Particle(random(50,350),30,7.5));
  }

  for ( var j = 0; j < particles.length ; j++){
    particles[j].display();
  }

  for ( var j = 0; j < plinkos.length ; j++){
    plinkos[j].display();
  }

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  drawSprites();
}