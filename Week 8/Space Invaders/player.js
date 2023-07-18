class Player {
    static SPEED = 5;
    static DIAMETER = 20;
  
    constructor(x, y){
      this.x = x;
      this.y = y;
      this.diameter = Player.DIAMETER;
      this.radius = this.diameter / 2;
      
    }
  
    draw(){
        fill(255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
  
    }
  
    rightEdge(){
      return this.x + this.radius;
    }
  
    leftEdge(){  
      return this.x - this.radius;
    }
  
    topEdge(){
      return this.y - this.radius;
    }
  
    bottomEdge(){
      return this.y + this.radius;
    }
  
    move(){
      // Move left or right
      if(keyIsDown(LEFT_ARROW)){
        this.x -= Player.SPEED;
  
      }else if (keyIsDown(RIGHT_ARROW)){
        this.x += Player.SPEED;
  
      }
      
      // Make sure player cannot exit the canvas
      this.x = constrain(this.x, 0 + this.diameter / 2, width - this.diameter / 2);
    }

    shoot(){
        Laser.fireSound.play(); // Comment out this line if you do not want laser sounds
        return new Laser(this.x, this.topEdge());        
    }

  }