class Asteroid{
    // If the Asteroid's radius is smaller than this, we will not break
    // it up further - we will just destroy it.
    static SMALLEST_RADIUS = 10;
    
    constructor(pos, r) {
      if (pos) {
        this.pos = pos.copy();
      } else {
        this.pos = createVector(random(width), random(height));
      }
      if (r) {
        this.r = r * 0.5;
      } else {
        this.r = random(15, 50);
      }
  
      this.vel = p5.Vector.random2D();
      this.total = floor(random(5, 15));
      this.offset = [];
      for (let i = 0; i < this.total; i++) {
        this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
      }
    }
  
      update() {
        
      }
  
      draw() {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        this.#createShape();
        pop();
      }
  
      #createShape(){
        beginShape();
        for (let i = 0; i < this.total; i++) {
          let angle = map(i, 0, this.total, 0, TWO_PI);
          let r = this.r + this.offset[i];
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape(CLOSE);
      }
  
      breakup() {
        // TODO: This method should create two new asteroids. The
        // two created asteroids should be put into an array and the
        // array is what is returned from this method.  

      }
  
      #wrapSideOfScreen(){
        const isOffSideOfScreen = this.x + this.size < 0 || this.x + this.size > width;
        if(isOffSideOfScreen()){

        }
        return isOffSideOfScreen;
      }
  
      #wrapTopBottomScreen(){
        const isOffTopOfScreen = this.y + this.radius < 0 || this.y - this.radius > height;   
        if(isOffTopOfScreen()){

        }
      }
      
      
      isOffScreen() {
        const isOffTopOfScreen = this.y + this.radius < 0 || this.y - this.radius > height;   
        const isOffSideOfScreen = this.x + this.radius < 0 || this.x - this.radius > width;
        return isOffSideOfScreen || isOffTopOfScreen;
      } 
      
      

      screenWrap() {
          /* 
              When an asteroid goes offscreen in some direction, it should
              re-enter on the opposite side of the screen.
  
              For example, if an asteroid exits on the top of the screen,
              it should be re-entering from the bottom while doing so.
          */
        if(this.x == isOffScreen()){
          this.#wrapSideOfScreen();
        }
        else if(this.y == isOffScreen){
          this.#wrapTopBottomScreen();
        }
      }
  }