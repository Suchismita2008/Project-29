const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new ground(400, 400, 800, 20);
    






}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    strokeWeight(4);

    ground1.display();
}
