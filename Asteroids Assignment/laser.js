class Laser{
    static SPEED = 5;

  
    constructor(shipPosVector, angle) {
      this.pos = createVector(shipPosVector.x, shipPosVector.y);
      this.vel = p5.Vector.fromAngle(angle);
      this.vel.mult(10);
    }
  
    update() {
        //shot when the ship pointing 
        this.pos.add(this.vel);
    }
  
    draw() {
        fill(255);
        ellipse(this.x, this.y, this.daimeter)
    }
  
    hits(asteroid) {
        // hint: use the dist() function in p5 js
        // const d = dist(this.x, this.y, asteroid.sideEdge(), asteroid.bottomEdge());
        // return d < this.radius + (asteroid.size / 2);          
    }
  
    isOffscreen() {
        const isOffTopOfScreen = this.y + this.radius < 0 || this.y - this.radius > height;   
        const isOffSideOfScreen = this.x + this.radius < 0 || this.x - this.radius > width;
        return isOffSideOfScreen || isOffTopOfScreen;
    }
    shoot(){
        // if you shoot when you press the 'f' key in the main.js while creating a new laser everytime 
        return new Laser(this.pos, this.heading);
    }
  
  }