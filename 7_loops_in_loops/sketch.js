function setup() {
  createCanvas(400, 400);
  background(220);
  
  for (let y = 0; y < 8; y++ ){
    for ( let x = 0; x < 8; x++){
      print(x,y);
      fill(x*50, y*50, 0)
      noStroke();      
      square( x*50, y * 50, 50);
    }
  }
  
}

function draw() {
}