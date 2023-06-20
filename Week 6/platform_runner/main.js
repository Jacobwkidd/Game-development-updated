let x = 50;
let y = 475;
let speed = 2;
let radius = 20;


function setup(){
    createCanvas(500, 500);
    x = width / 2;
    y = height - radius;
}

function draw(){
    background(0);

    ellipse(x, y, radius * 2);


    if(keyIsDown(LEFT_ARROW)){
        x -= speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += speed;
    }
    // else if(keyIsPressed == UP_ARROW){
    //     y += 25;
    // }


    //keep on the canvas
    // constrain(what to Constrain, lowest value, highestvalue)
    x = constrain(x, 0 + radius, width - radius);
    // 0 + radius because 



}