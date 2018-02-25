var nums = [230, 220];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, nums[0], 20);
  
  // draw drip
  ellipse(nums[0], nums[1], 10);
  
	
	for (var i = random(0,5); i < 10; i = i + 5) {
  nums[1] = nums[1] + i 
}


  if (nums[1] > height*2) {
    // reset
    nums[1] = 220;
  }
}
