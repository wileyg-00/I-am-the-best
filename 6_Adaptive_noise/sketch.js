function setup() {
  createCanvas(400, 400);
  background(220);
  
  for( let x = 0; x <= 400; x += 50 ){
    
    fill(x/1.41);
    circle( x, height/2, 20);

  }
  

}

function draw() {}