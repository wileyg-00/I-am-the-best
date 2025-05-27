let bouncy = {
  
  size: 16,
  posX: 100,
  posY: 200,
  vitX: 0.5,
  vitY: 0.5,
  name: "bouncy object",
  
  bouger: function(){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;  // posY = posY + vitY
  },
  
  rebondir: function(){
    if( this.posX + this.size > width || this.posX < 0 ){
      this.vitX = this.vitX * -1;
    }
    if( this.posY + this.size > height || this.posY < 0 ){
      this.vitY *= -1;  // vitY = vitY * -1;
    }
  },
  
  afficher: function(){
    square(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    this.afficher();
  }
  
}; // bouncy object

let Blabla = Object.create(bouncy); // clone (je vais le faire bouger differemment)
Blabla.name = "Bouncy McBounceface";
Blabla.vitX = 1.5;

let Chaton = Object.create(bouncy);
Chaton.name = "Meow!";
Chaton.vitX = 1.9;



function setup() {
  createCanvas(400, 400);
  frameRate(120);
}

function draw() {
  background(220);
  bouncy.update();//ça fait l'action = l'animation tout
  Blabla.update();
  Chaton.update();
}
