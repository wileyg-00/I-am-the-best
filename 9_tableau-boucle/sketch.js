function setup() {
  createCanvas(400, 400);
  background(220);
  
  let circles = [8, 15, 16, 23, 
                42, 80, 33, 24, 50, 25];
for ( let i = 0;  i < circles.length; i++ ){
  console.log(i);
  circle(i*40, height/2, circles[i]);
}
  
}

function draw() {}