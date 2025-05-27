let boxSize = 20;

let position = 33;
let vitesse = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  square (position, 200, boxSize);
  position += vitesse;
  
  print(vitesse);
  
  if ( position + boxSize > 400 ){
    vitesse = vitesse * -1;
  }
  
  if ( position < 0 ){
     vitesse = vitesse * -1;
  }
}