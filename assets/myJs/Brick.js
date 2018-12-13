class Brick extends Entity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
        this.saveMarioPosY = mario.myPosY;
    }
}
