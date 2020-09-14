var bullet,wall;
var speed,weight;

var thickness;


function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    
    return true;

  }
    return false;

}

function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50,200,20,50);
 
  wall=createSprite(1500,200,60,100);
  
}


  
  

function draw() {
  //walll.color(80,80,80);
  background(255,255,255);
  
  bullet.velocityX= 15; 
  


  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  //if(hasCollided(bullet,wall)){
  
  //bullet.veloityX=0;


 
//  }
 if(wall.x-bullet.x<(bullet.width+wall.width)/2){
 
bullet.velocityX=0;
var damage=0.5* weight * speed * speed/(thickness* thickness * thickness)
   
if(damage>10){

wall.shapeColor=color(255,0,0);

}
if(damage<10){
 
wall.shapeColor=color(0,255,0);

}

 }
 

  
  drawSprites();
}