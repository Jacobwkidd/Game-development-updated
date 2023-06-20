let triangles = [];
let numTriangles = 10;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numTriangles; i++) {
    triangles.push(new Triangle());
  }
}

function draw() {
  background(0);

  for (let i = triangles.length - 1; i >= 0; i--) {
    triangles[i].draw();
    triangles[i].update();
    
    // If a triangle is off screen, remove it from the array
    if (triangles[i].isOffScreen()) {
      triangles.splice(i, 1);
    }
  }

  // Add a new triangle every 60 frames
  if (frameCount % 60 === 0) {
    triangles.push(new Triangle());
  }
}
