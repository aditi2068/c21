var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(100,100,50,60);
  o1.shapeColor = "white";
  o2 = createSprite(200,100,50,60);
  o2.shapeColor = "pink";
  o3 = createSprite(300,100,50,60);
  o3.shapeColor = "yellow";
  o4 = createSprite(400,100,50,60);
  o4.shapeColor = "blue";
movingRect.velocityX = 8;
fixedRect.velocityX = -8;
}

function draw() {
  background(0,0,0);  
 bounceOff(movingRect,fixedRect);

  
    
  
  
  drawSprites();
}

