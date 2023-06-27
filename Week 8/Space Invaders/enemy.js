class Enemy{
    static SIZE = 40;
    static X_VELOCITY = 1;
    static DROP = 40;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Enemy.SIZE;
        this.xVelocity = Enemy.X_VELOCITY;
        this.hitEdge = false;
    }

    draw(){
        rect(this.x, this.y, this.size, this.size);
    }

    update(){

    }



}