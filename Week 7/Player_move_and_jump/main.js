const SPACE_BAR = 32;
const NUM_PLATFORMS = 10;
const platforms = [];

let player = null;


function setup(){
    createCanvas(500, 500);
    
    player = new Player(width / 2, height - 10, 20);
    createEnviroment();
}

function draw(){
    background(0);
    player.update();
    player.draw();
    player.move();

    //draw each platforms
    for(const platform of platforms){
        platform.draw();
    }
}

function createEnviroment(){
    /*
        - loop NUM_PLATFORMS amount of the times
            - for every iteration, create a platform

        - creating a platform:
            -random value
                - position (x, y)
                    - bounded within the canvas
                - width    
                    - but within the min & max widths of the platform class
    */

     for(let i = 0; i < NUM_PLATFORMS; i++){
        //get random platform width
        const platformWidth = random(Platform.MIN_WIDTH, Platform.MAX_WIDTH);
        //get random x 
        const randomX = random(0, width - platformWidth);
        //get random y
        const randomY = random(Platform.HEIGHT, height - Platform.HEIGHT);
        //make sure that platforms are not too close
        let tooClose = false;
        //loop through platforms array checks if any are too close
        for(const platform of platforms){
            if(dist(randomX, randomY, platform.x, platform.y) < Platform.MIN_SPACING){
                tooClose = true; 
                break;
            } 
        }
        if(!tooClose){
            //add to the array 
            let platform = new Platform(randomX, randomY, platformWidth);
            platforms.push(platform);
        }
        else{
            i--; // try again
        }

        // create new platform
        // let platform = new Platform(randomX, randomY, platformWidth);
        // platforms.push(platform);
        // platforms.push(new Platform(randomX, randomY, platformWidth));
     }               
}

function keyPressed(){
    if(keyCode === SPACE_BAR && player.isOnGround()){
        player.jump();
    }
}
