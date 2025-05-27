let boxSize = 20;

let posX = 50;
let posY = 50;

let vitX = 2;
let vitY = 1.234;


function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  bouger();
  rebondir();
  afficher();
}


function afficher(){
// afficher
  fill (255);
  square(posX, posY, boxSize);
  fill (255, 0, 255, 255);
  ellipseMode (CORNER);
  circle (posX, posY, boxSize);
}

function bouger(){
// bouger
  posX = posX + vitX;
  posY += vitY;  // posY = posY + vitY
}
  
function rebondir(){
 // rebondir
  if( posX + boxSize > width || posX < 0 ){
    vitX = vitX * -1;
  }
  if( posY + boxSize > height || posY < 0 ){
    vitY *= -1;  // vitY = vitY * -1;
  }
}

