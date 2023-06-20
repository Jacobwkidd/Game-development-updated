class Triangle {
    constructor() {
        this.x = 0;
        this.y = random(height);
        this.size = random(30, 100);
        this.speed = 2;
        this.yDirection = random([-1, 1]);  // Randomly move up or down
    }

    draw() {
        triangle(this.x, this.y, this.x - this.size / 2, this.y + this.size, this.x + this.size / 2, this.y + this.size);
    }

    update() {
        this.x += this.speed;
        this.y += this.yDirection * this.speed;  // Move in random y-direction
    }

    isOffScreen() {
        return this.x - this.size / 2 > width;
    }
}
  