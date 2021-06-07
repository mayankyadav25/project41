const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var drops=[];
var maxDrops=100;
var umbrella;
var rand;

var Thunder,thunder1,thunder2,thunder3,thunder4;

function preload(){
    
}

function setup(){
   var canvas=createCanvas(500,700);

   engine=Engine.create();
   world=Engine.world();
   umbrella=new Umbrella(200,500);

   for(var i=0;i<maxDrops;i++){
    drops.push(new createDrops(random(0,500),random(0,500)))
}
    
}

function draw(){
    Engine.update(engine);
    background(53,46,88);

    rand=Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame=frameCount;
        Thunder=createSprite(random(10,370),random(10,30),10,10);
       
    }
    if(thunderCreatedFrame+10=== frameCount && Thunder){
        Thunder.destroy();
    
}
umbrella.display();

for(var i = 0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
}
drawSprites();
}   

