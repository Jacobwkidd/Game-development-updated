const FIRE_KEY = 70; //keycode for 'f'
const lasers = [];

let player = null;
let explosionSound = null;
let laserSound = null;
//let laser = null;
function preload(){
    laserSound = loadSound('assets/laser_fire.mp3');
    Laser.fireSound = laserSound;
}

function setup(){
    createCanvas(800, 800);
    player = new Player(width / 2, height - 10);
    laser = new Laser(width / 2, height - 50);
}

function draw(){
    background(0);
    //player.update();
    player.draw();
    player.move();

    renderLaser();
}

function renderLaser(){
    //update and draw lasers
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].draw();
        lasers[i].update();

        // if a laser is off screen, remove it from the array
        if(lasers[i].isOffScreen()){
            lasers.splice(i, 1);// remove the laser
        }
    }

    
}

function keyPressed(){
    if(keyCode == FIRE_KEY){
        // shoot a laser 
        lasers.push(player.shoot());
        //add the lase to the lasers array somehow
        //laser = player.shoot();
    }
}