class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        this.posYAfterJump = 0;
        this.jumpSpeed = -3;
        this.jumpLimit = 80;
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

    jump(direction) {
        if (this.posY <= this.posYAfterJump - this.jumpLimit) {
            this.jumpSpeed = -this.jumpSpeed;
        }
        this.posY += this.jumpSpeed;
        console.log('jump');
        if (mario.posY + mario.height >= canvas.height) {
            mario.jumpSpeed = -mario.jumpSpeed;
            keyObj['38'] = false;
        }
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
