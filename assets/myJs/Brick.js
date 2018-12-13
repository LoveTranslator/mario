class Brick extends Entity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
        this.saveMarioPosY = mario.myPosY;
    }

    interactionWithBlocks() {
        if (mario.posX <= (this.posX + this.width)) {
            if ((mario.posY + mario.height) <= this.posY) {

            }
        }
    }
}
