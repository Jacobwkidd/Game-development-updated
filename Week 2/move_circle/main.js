let x;
let y;
let xSpeed;
let ySpeed;

let i = 0; // global variable

function setup() {
    createCanvas(800, 800);
    x = width / 2;
    y = height / 2;

    xSpeed = 3;
    ySpeed = 5;
}

function outOfSideBounds(){
    return x > width || x < 0
}

function outOfUpperBounds(){
    return y > height || y < 0
}


  
function draw() {
    background(220);
    fill(255, 100, 25);
    i++;
    console.log("i = " + i);
    ellipse(x, y, 50, 50);
    x += xSpeed;
    y += ySpeed;
    if(outOfSideBounds()){
        xSpeed *= -1;
        // or xSpeed = -xSpeed;
    }
    if(outOfUpperBounds()){
        ySpeed *= -1;
    }

    
    
    //ellipse(width / 2, height / 2, 80, 80); //draw a circle in the middle of the screen
}