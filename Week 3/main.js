let x = 200;
let y = 200; // initial posistion of rectangle
let rectHeight = 50; // the height of the rectangle
let rectWidth = 50;

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0);

    //drawing a rectangle
    rect(x, y, rectWidth, rectHeight);

    //moving up
    if(keyIsDown(UP_ARROW)){
        y -= 5;
    } // moving down
    else if(keyIsDown(DOWN_ARROW)){
        y += 5;
    } // moving right
    else if (keyIsDown(RIGHT_ARROW)){
        x += 5;
    } // moving left
    else if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }


    // let leftWall = 50;
    // let rightWall = 100;
    // constrain(whatToConstrain, lowestValue, HighestValue);
    y = constrain(y, 0, height - rectHeight);
    x = constrain(x, 0, width - rectHeight);
    
}

// function keyIsDown(){
//     if(keyCode === UP_ARROW){
//         y--;
//     }
//     else if(keyCode === DOWN_ARROW){
//         y++;
//     }
//     else if(keyCode === RIGHT_ARROW){
//         x++;
//     }
//     else if(keyCode === LEFT_ARROW){
//         x--;
//     }
// }

// function keyPressed(){
//     if(keyCode === LEFT_ARROW){
//         x -= 5;
//     }
//     else if(keyCode === RIGHT_ARROW){
//         x += 5;
//     }
//     else if(keyCode === UP_ARROW){
//         y -= 5;
//     }
//     else if(keyCode === DOWN_ARROW){
//         y += 5;
//     }



//     return false;
// }



