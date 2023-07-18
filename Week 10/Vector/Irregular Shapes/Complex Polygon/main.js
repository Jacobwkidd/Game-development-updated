function setup() { 
	createCanvas(400, 400); // create a canvas of size 400x400 pixels
}

function draw() {
  background(220);
  fill(255, 0, 0); // fill the shape with red color
  
  beginShape();
  vertex(200, 100);
  vertex(300, 150);
  vertex(300, 250);
  vertex(200, 300);
  vertex(100, 250);
  vertex(100, 150);
  endShape(CLOSE);
}