let ball = {
  
  size: 20,
  posX: 1,
  posY: 1,
  vitX: 1.2,
  vitY: 0.8,
  name: "cue",
  
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
    circle(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY-4);
  },
  
  update: function(){
    this.bouger();
    this.rebondir();
    this.afficher();
  }
  
}; // bouncy object

let one = Object.create(ball); // clone (je vais le faire bouger differemment)
one.name = "1";
one.posX = Math.random()*350;
one.posY = Math.random()*700;
one.vitX = Math.random()*4-2;
one.vitY = Math.random()*4-2;
r= 255;
v= 255;
b= 0;

let two = Object.create(ball); // clone (je vais le faire bouger differemment)
two.name = "2";
two.posX = Math.random()*350;
two.posY = Math.random()*700;
two.vitX = Math.random()*4-2;
two.vitY = Math.random()*4-2;

console.log(two.posX);

let three = Object.create(ball); // clone (je vais le faire bouger differemment)
three.name = "3";
three.posX = Math.random()*350;
three.posY = Math.random()*700;
three.vitX = Math.random()*4-2;
three.vitY = Math.random()*4-2;

let four = Object.create(ball); // clone (je vais le faire bouger differemment)
four.name = "4";
four.posX = Math.random()*350;
four.posY = Math.random()*700;
four.vitX = Math.random()*4-2;
four.vitY = Math.random()*4-2;

let five = Object.create(ball); // clone (je vais le faire bouger differemment)
five.name = "5";
five.posX = Math.random()*350;
five.posY = Math.random()*700;
five.vitX = Math.random()*4-2;
five.vitY = Math.random()*4-2;

let six = Object.create(ball); // clone (je vais le faire bouger differemment)
six.name = "6";
six.posX = Math.random()*350;
six.posY = Math.random()*700;
six.vitX = Math.random()*4-2;
six.vitY = Math.random()*4-2;

let seven = Object.create(ball); // clone (je vais le faire bouger differemment)
seven.name = "7";
seven.posX = Math.random()*350;
seven.posY = Math.random()*700;
seven.vitX = Math.random()*4-2;
seven.vitY = Math.random()*4-2;

let eight = Object.create(ball); // clone (je vais le faire bouger differemment)
eight.name = "8";
eight.posX = Math.random()*350;
eight.posY = Math.random()*700;
eight.vitX = Math.random()*4-2;
eight.vitY = Math.random()*4-2;












function setup() {
  createCanvas(350, 700);
  frameRate(120);
}

function draw() {
  background(0,150,0);
  ball.update();//ça fait l'action = l'animation tout
  one.update();
  two.update();
  three.update();
  four.update();
  five.update();
  six.update();
  seven.update();
  eight.update();
}
