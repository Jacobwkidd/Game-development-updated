class Enemy{
    static SIZE = 40;
    static X_VELOCITY = 1;
    static DROP = 40;

    static exlosionSound;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Enemy.SIZE;
        this.xVelocity = Enemy.X_VELOCITY;
        this.hitEdge = false;
    }

    draw(){
        fill(255);
        rect(this.x, this.y, this.size, this.size);
    }

    update(){
        this.x += this.xVelocity;
    }

    
    // leftEdge(){
    //     return this.x - this.size / 2;
    // }
    sideEdge(){
        return this.x + this.size / 2;
    }
    // topEdge(){
    //     return this.y + this.size /2;
    // }
    bottomEdge(){
        return this.y - this.size / 2;
    }

    // tell if hit side of canvas
    enemyHitsSide(){
        this.x = constrain(this.x, this.size, width - this.size);
        if(this.x == this.hasHitsSideOffScreen()){
            console.log("Hello");
            this.dropAndReverseDirection();
        }
    }

    hasHitsSideOffScreen(){  
        const isOffSideOfScreen = this.x + this.size < 0 || this.x + this.size > width;
        return isOffSideOfScreen;
    }

    //drop them down & reverse direction

    dropAndReverseDirection(){
        this.y += Enemy.DROP;
        this.xVelocity = -this.xVelocity;
    }



  


}