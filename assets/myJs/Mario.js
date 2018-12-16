class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        /*переменные для расчёта прыжка*/
        this.posYAfterJump = 0;
        this.speedLeft = 3;
        this.speedRight = 3;
        this.readyToJump = true;
        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
    }

    moveLeft(jump) {
        if (mario.posX > 0) {
            this.posX -= this.speedLeft;
        }
        if (!jump) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }
    }

    moveRight(jump) {
        if (mario.posX < 460) {
            this.posX += this.speedRight;
        }
        if (!jump) {
            this.movementSpriteSheet([245, 275, 305, 335], 0.01);
        }
    }

    jump(direction) {
        this.readyToJump = false;

        this.jumpCount++;
        this.jumpHeight = 2 * this.jumpLength * Math.sin(Math.PI * this.jumpCount / this.jumpLength);

        this.posY = this.posYAfterJump - this.jumpHeight;

        if (direction === 'left') {
            this.sx = 35;
            this.sy = 80;
        }
        if (direction === 'right') {
            this.sx = 395;
            this.sy = 80;
        }
    }

    comeDown() {

    }


    addLife() {

    }

    removeLife() {

    }
}
