let myImage;
function preload(){
  myImage = loadImage ("Kermit.jpg");
}


let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
  
  image(myImage, posX, posY, 100, 100);
  
  posX = posX + vitX;
  posY = posY + vitY; 
  
  
}

function draw() {}

