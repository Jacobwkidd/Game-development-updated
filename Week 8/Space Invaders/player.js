class Player{
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

    update(){

    }
    
    
    move(){
        if(keyIsDown(LEFT_ARROW)){//left arrow pressed
            this.x -= Player.SPEED;
        }
    
        if(keyIsDown(RIGHT_ARROW)){//right arrow pressed
            this.x += Player.SPEED;
        }
    
        //keep on the canvas
        //constrain(whatToConstrain, lowestValue, highestValue);
        this.x = constrain(this.x, this.radius, width - this.radius);
    }
    shoot(){
        Laser.fireSound.play();
        return new Laser(this.x, this.y - this.radius);
    }

}