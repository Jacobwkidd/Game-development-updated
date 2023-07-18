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

    }
    sideEdge(){

    }
    topEdge(){

    }
    bottomEdge(){

    }

    // tell if hit side of canvas
    enemyHitsSide(){
        this.x = constrain(this.x, this.radius, width - this.radius);
        if(this.x == this.isOffScreen()){
            this.DropShip();
        }
    }

    hasHitsSideOfScreen(){  
        const isOffSideOfScreen = this.x + this.radius < 0 || this.x - this.radius > width;
        return isOffSideOfScreen;
    }

    //drop them down & reverse direction

    DropAndReverseDirection(){
        this.y = DROP;

    }



  


}