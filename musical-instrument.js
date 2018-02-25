var freq = [200,220,250,270];

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

var pressedA = false;
var pressedS = false;
var pressedD = false;
var pressedF = false;


function setup() {
	createCanvas (400,400);
	background (0);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('Sawtooth');
  oscA.freq(freq[0]);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('Sawtooth');
  oscS.freq(freq[1]);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('Sawtooth');
  oscD.freq(freq[2]);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('Sawtooth');
  oscF.freq(freq[3]);
  oscF.amp(0);
  oscF.start();
}
    
function draw() {
	background(0);
  fill(255);
	text('Click Here', width / 2, 40);
	rect(65,100,50,100);
	text('A', 90,90)
	rect(140,100,50,100);
	text('S', 165,90)
	rect(215,100,50,100);
	text('D', 240,90)
	rect(290,100,50,100);
	text('F', 315,90)
  rect(65, 250, 275,100)
  if (playingA) {
		noStroke();
		fill(0,0,255);
    rect(65,100,50,100);
  } else if (playingS) {
		noStroke();
		fill(255,0,255);
    rect(140,100,50,100);
  } else if (playingD) {
    noStroke();
		fill(0,255,0);
    rect(215,100,50,100);
  } else if (playingF) {
		noStroke();
		fill(255,255,0);
    rect(290,100,50,100);
}
	 if (pressedA) {
    fill(0,0,255);
    ellipse(random(85,320),random (270, 340), random(20,20));
  } if (pressedS) {
    fill(255,0,255);
    ellipse(random(85,320),random (270, 340), random(20,20));
  } if (pressedD) {
    fill(0,255,0);
    ellipse(random(85,320),random (270, 340), random(20,20));
  } if (pressedF) {
    fill(255,255,0);
    ellipse(random(85,320),random (270, 340), random(20,20));
}}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;
    pressedA = true;
  } else if (key == 'S') {
    osc = oscS;
		playingS = true; 
    pressedS = true;
  } else if (key == 'D') {
    osc = oscD;
		playingD = true; 
    pressedD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
    pressedF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
 } else if (key == 'S') {
    osc = oscS;
 } else if (key == 'D') {
    osc = oscD; 
   } else if (key == 'F') {
    osc = oscF;
 }if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
    playingS = false;
   	playingD = false; 
    playingF = false;
    pressedA = false;
    pressedS = false;
    pressedD = false;
    pressedF = false;
}}
