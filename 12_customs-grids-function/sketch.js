function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(200, 200, 100);
  
  grids(200, 100, 200);
  grids(100, 100, 20);
  grids(20, 300, 300);
}

function grids ( posX, posY, taille){
  line(posX, posY,  posX + taille, posY);
  
  line(posX, posY+10,  posX+taille, posY+10);
  line(posX, posY+20,  posX+taille, posY+20);
  line(posX, posY+30,  posX+taille, posY+30);
  line(posX, posY+40,  posX+taille, posY+40);
  line(posX, posY+50,  posX+taille, posY+50);
  
  
}