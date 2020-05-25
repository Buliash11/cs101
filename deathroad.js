let stone;
let stones;
let stoneGen = 1;
let car;
let road;
let roadImage;
let number;
let benzin;
let benzins;
let benzinGen = 1;
let benzCount = 0;
let sprite;
let velocity;
let acceleration;
let speed = 1;
let collisionCount = 0;
let thrust;
let position;
let velocityLimit = 40;
let finish;
let finishs;

function preload() {
soundFormats('mp3', 'ogg');
ost = loadSound('assets/Holy Moses (Ger) 1987 - Road Crew.mp3');
}

function setup() {
createCanvas(600, 1000);

ost.setVolume(0.3);
ost.play();

roadImg = loadImage('assets/road.gif');
road = createSprite(width / 2, height / 2);
road.addImage(roadImg);
road.scale = 0.5;
road.setCollider('circle', 0, 0, 80);
  
strelkiImg = loadImage('assets/strelki.gif');
strelki = createSprite(width / 2, 400);
strelki.addImage(strelkiImg);
strelki.scale = 0.06;
strelki.setCollider('circle', 0, 0, 80);

finishImg = loadImage('assets/finish.gif');
finishs = new Group();

numberImg = loadImage('assets/number.gif'); ///3, 2, 1, 0 - старт
number = createSprite(width / 2, 900);
number.addImage(numberImg);
number.scale = 0.1;
number.setCollider('circle', 0, 0, 80);

carImg = loadImage('assets/car.gif');
car = createSprite(width/2, height - 300);
position = createVector(width / 2, 500);
velocity = createVector(0, 0);
acceleration = createVector(0, 0);
car.addImage(carImg);
car.scale = 0.09;
car.setCollider('circle', 0, -100, 100);
car.mass = 0.3;
car.restitution = 4;
car.setSpeed(5, 5);

stones = new Group();

lightImg = loadImage('assets/light.png');
light = createSprite(width / 2, height / 2);
light.addImage(lightImg);
light.scale = 0.01;
light.setCollider('circle', 0, 0, 80);


hrthrImg = loadImage('assets/hrthr.png');
hrthr = createSprite(width / 2, height / 2);
hrthr.addImage(hrthrImg);
hrthr.scale = 0.37;
hrthr.setCollider('circle', 0, 0, 80);
  
fonImg = loadImage('assets/fon.png');
fon = createSprite(width / 2, height / 2);
fon.addImage(fonImg);
fon.scale = 1;
fon.setCollider('circle', 0, 0, 80);

benzins = new Group();
}
function draw() {
background(0);
drawSprites();

car.velocity.y = 1;
car.velocity.x = 0;

if (keyIsDown(UP_ARROW)) {
car.setSpeed(5, 270);
}
else if (keyIsDown(DOWN_ARROW)) { ///тачка управляется клавишами верх-вниз
car.setSpeed(5, 90);
}
else {
car.setSpeed(0, 0);
}

stonesRandom();
benzinsRandom();

car.collide(stones, callbackFunc);
car.collide(benzins, mayFinish);
car.collide(finishs, ifFinish);

text(collisionCount, 30, 30);
}

function callbackFunc() {
collisionCount = collisionCount + 1;

gameoverImg = loadImage('assets/gameover.gif');
gameover = createSprite(width / 2, height / 2);
gameover.addImage(gameoverImg);
gameover.scale = 0.22;
gameover.setCollider('circle', 0, 0, 150);

drawSprite(gameover); ///когда тачка натыкается на камень - вылезает game over (у камня рандомное появление и скорость)
}

function stonesCreate() {
stoneImg = loadImage('assets/stone.gif');
stone = createSprite(random(40, width), random(40, height), 80, 80); ///начинают летать камни и бензин (канистра) ///скорость и появление фиксированные, появ.по двум сторонам
stone.addImage(stoneImg);
stone.scale = 0.1;
stone.setCollider('circle', 0, 0, 80);
stone.setSpeed(random (0.6, 2), random(0, 1000));
stone.mass = 1;
stone.restitution = 28;
stones.add(stone);

drawSprite(stone);
stoneGen = 1;
}

function stonesRandom() {
if (stoneGen == 1) {
stoneGen = 0;
setTimeout(stonesCreate, 10000);
}
}

function benzinCreate() {
benzinImg = loadImage('assets/benzin.gif');
benzin = createSprite(width, random(0, height), 80, 80);
benzin.addImage(benzinImg);
benzin.scale = 0.1;
benzin.setCollider('circle', 0, 0, 80);
benzin.setSpeed(5, 180);
benzins.add(benzin);
benzinGen = 1;
}

function benzinsRandom() {
if (benzinGen == 1) {
benzinGen = 0;
setTimeout(benzinCreate, 10000);
}
}

function mayFinish() {
benzCount += 1;
if (benzCount >= 3) {  ///когда тачка ловит канистру с бензином 3 раза - вылезает финиш
number.remove();
finish = createSprite(width / 2, 200);
finish.addImage(finishImg);
finish.scale = 0.2;
finish.setCollider('circle', 0, 0, 80);
finishs.add(finish);

drawSprite(finish);
}
}

function ifFinish() {
}
