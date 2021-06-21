const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;






function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
 tower = new Tower(150,350,160,310)
 ground = new Ground(100,0,100,100)
  console.log(tower)
  
}

function draw() {
  background(189);
  Engine.update(engine);
 
 tower.display()
 ground.display()
  

  
  
  
  
 
}







