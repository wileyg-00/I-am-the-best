let boxSize = 20;
let position = 150;
let vitesse = 5;


let lineWidth = 10;
let lineHeight = 150;
let postion_2 = 100
let vitesse_2 = 3;


function setup() {
  createCanvas(400, 400);
}

//function draw() {
  //line (50,50,50) }

function draw() {
  background(0,0,0);
  circle (position, 200, boxSize);
  position += vitesse;
  rect (100,postion_2,lineWidth,lineHeight);
  rect (300,postion_2,lineWidth,lineHeight);
  
  //print(vitesse);
  
  if ( position + (boxSize*0.5) > 300 ){
    vitesse = vitesse * -1;
  }
  
  if ( position - boxSize < 100 ){
     vitesse = vitesse * -1;
  }
}
