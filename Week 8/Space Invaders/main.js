const FIRE_KEY = 70; //keycode for 'f'
const lasers = [];



const enemies = [];
const ENEMY_COLS = 6;
const ENEMY_ROWS = 5;


//----------------------
let player = null;
let explosionSound = null; // used when enemy hit
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
    // enemy = new Enemy(40, 40);
    createEnemyGrid(); 
}

function draw(){
    background(0);
    //player.update();
    player.draw();
    player.move();
    
    
    renderEnemies();
    renderLaser();

}

function renderLaser(){
    //update and draw lasers
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].update();
        lasers[i].draw();
        

        // if a laser is off screen, remove it from the array
        if(lasers[i].isOffScreen()){
            lasers.splice(i, 1);// remove the laser
            continue;
        }
        checkEnemyHit(lasers[i], i);
    }

    
}
function createEnemyGrid(){
    for(let i = 0; i < ENEMY_COLS; i++){ // i = x position
        for(let j = 0; j < ENEMY_ROWS; j++){    // j = y position
            enemies.push(new Enemy(i * 80 + 80, j * 60 + 60)); // spawning it the ships
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

function renderEnemies(){
    // Update and draw all enemies	
    for(let i = 0; i < enemies.length; i++){
        enemies[i].draw(); 
        enemies[i].update(); 
        if(enemies[i].hasHitsSideOffScreen()){
            for(let j = 0; j < enemies.length; j++){
                enemies[j].dropAndReverseDirection();
            }
        }
    }	
}


function checkEnemyHit(laser, laserIndex){
    // Check if laser hits any enemy
    for(let i = enemies.length - 1; i >= 0; i--){
        if(laser.hits(enemies[i])){
            console.log("Hello");
            lasers.splice(laserIndex, 1);// remove the laser
            enemies.splice(i, 1);// remove the laser
            return ;
        }
    }
}
