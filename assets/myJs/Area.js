class Area extends Entity {
    constructor(src) {
        super(src);
        this.background = 0;
        this.background2 = canvas.width;
    }

    toBuild() {
        if (mario.posX >= 460 && keyObj['39'] && this.background2 > 0) {
            this.background -= 3;
            this.background2 -= 3;
        }

        ctx.drawImage(this.img, this.background, 0, canvas.width, canvas.height);
        ctx.drawImage(this.img, this.background2, 0, canvas.width, canvas.height);
    }
    interactionWithMario() {
        /*Остановка прыжка при попадании на нижнюю грань canvas*/
        if (mario.posY + mario.height >= canvas.height - 4 &&
            !mario.readyToJump) {

            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
            mario.jumpCount = 0;
            mario.jumpHeight = 0;
        }
    }
}
