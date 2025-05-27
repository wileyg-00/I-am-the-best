
function setup() {
  createCanvas(400, 400);
  background(220);
  
  
  for (let loutre = 1/2; loutre < 7; loutre++ ){
    for ( let chaton = 1/2; chaton < 7; chaton++){
      
      fill(chaton*50, loutre*50, 0);
      if (chaton > 3 && loutre > 4){ fill(0); }
      print(chaton,loutre);    
      circle( chaton*55, loutre * 55, 45);
    }
  }

}

function draw() {
}