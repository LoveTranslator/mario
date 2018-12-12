class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
        this.myPosY = this.posY;

    }

    moveLeft(jump) {
        if (mario.posX > 0) {
            this.posX -= 3;
        }
        if (!jump) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }
    }

    moveRight(jump) {
        if (mario.posX < 460) {
            this.posX += 3;
        }
        if (!jump) {
            this.movementSpriteSheet([245, 275, 305, 335], 0.01);
        }
    }

    jump(posY, direction) {
        this.jumpCount++;
        this.jumpHeight = 2 * this.jumpLength * Math.sin(Math.PI * this.jumpCount / this.jumpLength);
        if (this.jumpCount > this.jumpLength) {
            this.jumpCount = 0;
            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            this.jumpHeight = 0;
        }
        
        this.posY = this.myPosY - this.jumpHeight;
        if (direction === 'left') {
            this.sx = 35;
            this.sy = 80;
        }
        if (direction === 'right') {
            this.sx = 395;
            this.sy = 80;
        }
    }

    addLife() {

    }

    removeLife() {

    }
}
