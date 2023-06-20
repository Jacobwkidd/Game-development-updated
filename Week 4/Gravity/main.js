
let ball;
const SPACE_BAR = 32;
     
function setup() {
  createCanvas(400, 600);
  ball = new Ball();
}

function draw() {
  background(0);
  ball.draw();
  ball.update();

}

function keyPressed() {
  if (keyCode == SPACE_BAR) {
    ball.up();
  }
}


  

  