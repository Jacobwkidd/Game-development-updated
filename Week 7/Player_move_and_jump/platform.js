class Platform{
    static HEIGHT = 20;
    static MIN_WIDTH = 50;
    static MAX_WIDTH = 100;
    static MIN_SPACING = 100;


    constructor(x, y, width){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = Platform.HEIGHT;
    }

    
    draw(){
        rect(this.x, this.y, this.width, this.height);
    }
}