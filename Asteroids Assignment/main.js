const FIRE_KEY = 32; // space bar
let ship;
let asteroids = [];
let lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    createAsteroids();
}

function draw() {
    background(0);
    renderShip();
    ship.turn();
    
    keyPressed();
    renderLasers();
}

function renderShip(){
    ship.draw();
    
}

function renderLasers(){
    for(let i = lasers.length - 1; i >= 0; i--){
        lasers[i].update();
        lasers[i].draw();
        

        //if a laser is off screen
        if(lasers[i].isOffScreen()){
            lasers.splice(i, 1);
            continue;
        }
        checkAsteroidHit(lasers[i], i);
    }
}

function checkAsteroidHit(laser, laserIndex){
    for(let i = asteroids.length - 1; i >= 0; i--){
        if(laser.hits(asteroids[i])){
            laser.splice(laserIndex, 1); 
            asteroids.splice(i, 1);
            shatterAsteroid(laserIndex);
            return;
        }
    }
}

function shatterAsteroid(asteroidIndex){
    if(asteroidIndex){
        asteroid.breakup();
    }
    
}

function renderAsteroids(){
    for(let i = 0; i < asteroids.length; i++){
        asteroids[i].draw();
        asteroids[i].update();
        if(asteroids[i].screenWrap()){
            asteroids[i].screenWrap();
        }
    }
}

function createAsteroids(){

}

function keyReleased() {
	// stop ship from rotating
}

function keyPressed() {
  if (keyCode == FIRE_KEY) {
	// fire a laser
    lasers.push(ship.shoot());
  } 
}