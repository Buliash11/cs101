function setup() {
  createCanvas(700, 900);
  background(255, 255, 255);

  for (let i = 0; i < 20; i++) {
    let r = random(0, 255);
    let g = random(0, 80);
    let b = random(0, 40);
    let cx = random(0, width);
    let cy = random(0, 900);
    let rt = random(0, 255);
    let er = random(0, 900);
    let we = random(900, 900);
    let yu = random(5, 50);
    let oi = random(r, g, b);

    rndR = random(0, 255);
    rndG = random(0, 40);
    rndB = random(0, 60);
    fill(rndR, rndG, rndB);
    noStroke();
    rotate(radians(45));
    rect(cx, cy, rt, rt);
  
    stroke(rndR, rndG, rndB);
    line(er, rt, cx, we);
    
    stroke(rndR, rndG, rndB);
    strokeWeight(2);
    noFill();
    ellipse(er, cx, rt, er);

    fill(rndB, 0, 0, 180);
    noStroke();
    triangle(cy, cx, cy, rt, we, er);  
  }
}
