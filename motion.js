function preload() {
  soundFormats('mp3', 'ogg');
  ost = loadSound('music/Ministry1.mp3');
}
let angle = 0;
let speed = 0.001;

function draw() {
  ost.setVolume(1);
  ost.play();
  createCanvas(1000, 1000);
  background(0, 0, 0);
  translate(width / 2, height / 2);
  rotate(angle);
  for (let i = 6; i < 10; i++) {
    push();
    rotate(i + TWO_PI / 20);
    translate(1, 6);
    mandala(1, 360, 4, [255, 255, 255], 4, 50, 1, 60, 20, 200);
    rotate(angle);
  }
  pop();
  angle = angle + speed;

  function mandala(startAngle, endAngle, angleInc, strokeClr, lenCutX, lenCutY, strokeW, endX, endY, lengthInc) {
    let incr = 0;
    for (let i = 2; i < endAngle / angleInc; i++) {
      push();
      stroke(strokeClr[0], strokeClr[2], strokeClr[2]);
      strokeWeight(strokeW);
      translate(4, 400);
      rotate(radians(startAngle));
      line(width / 2, height / 2, endX, endY);
      pop();
      startAngle += angleInc;
      incr += lengthInc;
      rotate(angle);
      translate(2, 1);
    }
  }
}
