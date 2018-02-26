var x = [];
var y = [];
var d = [];
var c = []

function setup() {
	createCanvas (400,400);
	background(255);
  
  for (var i = 0; i < 100; i++) {
    x[i] = random(20, 380);
    y[i] = random(30, 380);
    d[i] = random(20, 50);
		c[i] = random(255);
  }
}
  
function draw() {
  noStroke();
  // ellipses
for (var i = 0; i < 50; i++) {
fill(c[i]);
ellipse(x[i], y[i], d[i]);

	if (random() < 0.02) {
    // random diameter between 10 and 400
    d[i] = random(10, 200);
	}}
if (random() < 50) {
d[i] = random(20, 90);
    }
}
