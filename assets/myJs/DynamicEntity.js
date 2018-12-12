class DynamicEntity extends Entity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
        
        this.frameDelay = 5; // задержка кадра, при проходе по карте спрайтов
        this.currentFrameDelay = 0;
    }

    changePos() {

    }

    movementSpriteSheet(arrPos, sy) {
        let frames = arrPos.length - 1;
        this.sx = arrPos[this.currentFrameDelay];
        this.sy = sy || 0;
        if (this.frameDelay) {
            this.frameDelay--;
        }
        else {
            this.frameDelay = 5;
            if (this.currentFrameDelay == frames) {
                this.currentFrameDelay = 0;
            }
            else {
                this.currentFrameDelay++;
            }
        }
    }
}