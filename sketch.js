const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var rain = [];
var maxRain = 100;
var unbrella;
var rand;
var night;
var lightening , thunder1 , thunder2 , thunder3 , thunder4
var thunderCreateFrame = 0

function preload(){
    
}

function setup(){

    var canvas = createCanvas(450,650);

    engine = Engine.create();
    world = engine.world;

    unberlla = new Umbrella(175,475);

    for(var i = 0;i < maxRain; i++){
        rain.push(new Rain(random(0,500), random(0,500)));
    }
}

function draw(){
    Engine.update(engine);
    background(night);

    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        lighteningCreateFrame = frameCount;
        lightening = createSprite(random(20,500), random(10,30),10,10,10)
        switch(rand){
            case 1 : lightening.addImage(thunder1);
            break;
            case 2 : lightening.addImage(thunder2);
            break;
            case 3 : lightening.addImage(thunder3);
            break;
            case 4 : lightening.addImage(thunder4);
            break;
        }

    if(lighteningCreateFrame + 10 === frameCount && lightening);
        lightening.destroy();
}   
    umbrella.display();

    for(var i = 0; i < maxRain; i++){
    rain.display();
    }

    drawSprites
}

