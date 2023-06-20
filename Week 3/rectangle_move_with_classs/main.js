let rectangle;
let rectangle2;


function setup(){
    createCanvas(800, 800);
    //rect(x, y, rectWidth, rectHeight);
    rectangle = new Rectangle(100, 100, 50, 50);
    rectangle2 = new Rectangle(400, 400, 50, 50);
}

function draw(){
    background(0);

    //draw
    rectangle.draw();
    rectangle2.draw();

    //detect up motion
    if(keyIsDown(UP_ARROW)){
        rectangle.moveUp();
        rectangle2.moveUp();
    }
    

    //detect down motion
    if(keyIsDown(DOWN_ARROW)){
        rectangle.moveDown();
        rectangle2.moveDown();
    }


    //detect up motion for rectangle2
    // if(keyIsDown(87)){ // W
    //     rectangle2.moveUp();
    // }
        
    
    // //detect down motion for rectangle2
    // if(keyIsDown(83)){ // S
    //     rectangle2.moveDown();
    // }
    
}

class Rectangle{

    //rect(x, y, rectWidth, rectHeight);
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // moveUp() moveDown() draw()
    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
    moveUp(){
        if(keyIsDown(UP_ARROW)){
            this.y -= 5;
            this.y = constrain(this.y, 0, height - this.height);
        }
        
    }
    moveDown(){
        if(keyIsDown(DOWN_ARROW)){
            this.y += 5;
            this.y = constrain(this.y, 0, height - this.height);
        } 
        
    }
}