function setup() { 
	createCanvas(400, 400); // create a canvas of size 400x400 pixels
}

function draw() {
  background(220);
  fill(255, 0, 0); // fill the shape with red color
  
  let radius = 100;
  let totalVertices = 10;
  
  beginShape();
  for (let i = 0; i < totalVertices; i++) {
    let angle = map(i, 0, totalVertices, 0, TWO_PI);
    let x = 200 + radius * cos(angle);
    let y = 200 + radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}