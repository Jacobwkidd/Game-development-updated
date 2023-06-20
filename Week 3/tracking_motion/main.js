let ball, paddle;


function setup(){
    createCanvas(800, 800);
    ball = new Ball(width / 2, height / 2, 50, 50, 2, 3);
    paddle = new Paddle(400, 400, 50, 50);
}

function draw(){
    background(0);
    
    //update ball's position (it is constantly moving)
    ball.update();
    // then redraw the ball at the new position
    ball.draw();

    paddle.update(ball);
    paddle.draw();
}

class Ball{
    //param list
    constructor(x, y, width, height, xVelocity, yVelocity){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
    }

    //draw(), hasHitSideWall(), hasHitTopBottomWall()
    draw(){
        ellipse(this.x, this.y, this.width, this.height);
    }
    hasHitSideWall(){
        return this.x > width || this.x < 0
    }

    hasHitTopBottomWall(){
        return this.y > height || this.y < height
    }

    update(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        if(this.hasHitSideWall()){
            this.xVelocity = -this.xVelocity;

        }
        if(this.hasHitTopBottomWall()){
            this.yVelocity = -this.yVelocity;
        }
    }

}

class Paddle{
    constructor(x, y, width, height, xVelocity, yVelocity){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }  
    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
    update(ball){
        this.y = ball.y - this.height / 2;
    }
}