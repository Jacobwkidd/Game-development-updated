class Laser{
    static SPEED = 5;
    static DIAMETER = 5;
    
    static fireSound = null;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.diameter = Laser.DIAMETER;
        this.radius = this.diameter / 2;
    }

    draw(){
        fill(255);
        ellipse(this.x, this.y, this.diameter);
    }

    update(){
        //make laser upwards
        this.y -= Laser.SPEED;
    }

    isOffScreen(){
        const isOffTopOfScreen = this.y + this.radius < 0;   
        const isOffSideOfScreen = this.x + this.radius < 0 || this.x - this.radius > width;
        return isOffSideOfScreen || isOffTopOfScreen;
    }

    hits(enemy){
        const d = dist(this.x, this.y, enemy.sideEdge(), enemy.bottomEdge());
        return d < this.radius + (enemy.size / 2);
    }

}