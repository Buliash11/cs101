function setup() {
createCanvas(1000, 1000);
background(0, 0, 60);
stroke(180);
noFill();
ellipse(width / 2, height / 2, 80, 80);
ellipse(width / 2, height / 2, 350, 350);
ellipse(width / 2, height / 2, 355, 355);
ellipse(width / 2, height / 2, 85, 85);
ellipse(width / 2, height / 2, 345, 345);
mandala(0, 360, 2, [0, 5, 255], 90, 5, 1, 60, 17, 1);
mandala(0, 360, 2, [9, 85, 200], 90, 180, 3, 160, 68, 1);
mandala(0, 180, 6, [9, 80, 220], 90, 180, 4, 0, 60, 3);
mandala(0, 180, 6, [20, 180, 255], 90, 400, 4, 0, 60, 3);


}

function mandala(startAngle, endAngle, angleInc, strokeClr, lenCutX, lenCutY, strokeW, endX, endY, lengthInc) {
let incr = 0;
for (let i = 0; i < endAngle / angleInc; i++) {
push();
stroke(strokeClr[0], strokeClr[1], strokeClr[2]);
strokeWeight(strokeW);
translate(width / 2, height / 2);
rotate(radians(startAngle));
line(width / 2 - lenCutX - incr, height / 2 - lenCutY - incr, endX, endY);
pop();
startAngle += angleInc;
incr += lengthInc;
}
}
