let boxSize = 20;

let r= Math.random()*255;
let v= Math.random()*255;
let b= Math.random()*255;

let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,0);
  square (posX, posY, boxSize);
  
  fill (r,v,b);
  
  posX = posX + vitX;
  posY = posY + vitY; 
  
  if ( posX + boxSize > width || posX < 0  ){
    vitX = vitX * -1;
    changeColor()
  }
 
  if ( posY + boxSize > height || posY < 0  ){
    vitY = vitY * -1;
    changeColor()
  }
}
  
function changeColor(){
   r= Math.random()*255;
   v= Math.random()*255;
   b= Math.random()*255;
}


  
