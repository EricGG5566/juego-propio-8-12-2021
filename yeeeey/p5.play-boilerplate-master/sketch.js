const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var engine, world, bodies;
var player1;

function setup() {
    
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world
    player1 = new player(50,50,100,100);
}
function draw(){
    background("green");
    Engine.update(engine);

    
    player1.display();
}