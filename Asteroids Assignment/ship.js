class Ship{

    constructor() {
          // No need to modify anything in this constructor, unless you want to make the ship
          // move to different locations. If you want to make the ship "fly" to different places,
          // I would suggest uncommenting the "this.Boosting" and change nothing else in the constructor.
        this.pos = createVector(width / 2, height / 2);
        this.radius = 20;
        this.heading = 0;
        this.rotation = .05;
        this.vel = createVector(0, 0);
        // this.isBoosting = false // Can use this if doing extra credit. Otherwise this is unneeded.
    }
  
    update() {
        // This is an optional method to implement if you choose to have the
        // ship be able to "fly" around.
    }
  
    hits(asteroid) {
        // Optional to implement. Taking action when an asteroid hits the ship
        // is not a requirement for this assignment.
    }
  
    draw() {
        // No need to modify anything in this method.
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        fill(0);
        stroke(255);
        triangle(-this.radius, this.radius, this.radius, this.radius, 0, -this.radius);
        pop();
    }
  
    setRotation(angle) {
        // No need to modify anything in this method.
        this.rotation = angle;
    }
  
    turn() {
        // No need to modify anything in this method.
        
        if(keyIsDown(LEFT_ARROW)){
            this.heading += this.rotation;
        }
        else if(keyIsDown(RIGHT_ARROW)){
            this.heading -= this.rotation;
        }
    }
  }