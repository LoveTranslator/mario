class Area extends Entity {
    constructor(src) {
        super(src);
        this.background = 0;
        this.background2 = canvas.width;
    }

    toBuild() {
        if (mario.posX > 460 && keyObj['39'] && this.background2 > 0) {
            this.background -= 3;
            this.background2 -= 3;
        }
        ctx.drawImage(this.img, this.background, 0, canvas.width, canvas.height);
        ctx.drawImage(this.img, this.background2, 0, canvas.width, canvas.height);
    }
}
