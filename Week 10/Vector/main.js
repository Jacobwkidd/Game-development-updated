let position = null;
let velocity = null;

function setup(){
    createCanvas(720, 400);

    //start position is middle of canvas
    position = createVector(width / 2, height / 2);

    // start velocity to move right and down
    velocity = createVector(2, 2);
}

function draw(){
    background(0);

    // position.x += 2; // moving to the right


    // position.x += velocity.x; moving to bottom right
    // position.y += velocity.y; // same as position.add(velocitys)

    position.add(velocity); // moving to bottom right


    //ellipse(coord.x, coord.y, width, height);
    ellipse(position.x, position.y, 48, 48);

    const hitsLeftSide = position.x <= 0;
    const hitsRightSide = position.x >=  width;

    const hitsTop = position.y >=  height;
    const hitsbottom = position. y <= 0;
    


    // hits side
    if(hitsLeftSide || hitsRightSide){
        velocity.x = -velocity.x
    }
    

    //hits top or bottom
    if(hitsTop || hitsbottom){
        velocity.y = -velocity.y;
    }
   
}