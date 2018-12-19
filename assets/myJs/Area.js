class Area extends Entity {
    constructor(src, countBackground) {
        super(src);
        this.background = 0;
        this.background2 = canvas.width;

        this.count = countBackground;
        this.arrBack = [];
        for (let i = 0; i < this.count; i++) {
            this.arrBack[i] = i * canvas.width;
        }
    }

    toBuild() {
        this.arrBack.forEach(item => {
            ctx.drawImage(this.img, item, 0, canvas.width, canvas.height);
        })
    }

    moveMap() {
        interactionEntityArr.forEach(item => {
            if (mario.posX >= 460 && keyObj['39'] && this.arrBack[this.count - 1] > 3) {
                item.posX -= mario.speedRight;
            }
        })

        if (mario.posX >= 460 && keyObj['39'] && this.arrBack[this.count - 1] > 3) {
            for (let i = 0; i < this.arrBack.length; i++) {
                this.arrBack[i] -= mario.speedRight;
            }
        }
    }

    interactionWithMario() {
        /*Остановка прыжка при попадании на нижнюю грань canvas*/
        if (mario.posY + mario.height >= canvas.height - 6 &&
            !mario.readyToJump) {
            mario.posY = canvas.height - mario.height - 1;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
            mario.jumpCount = 0;
            mario.jumpHeight = 0;
            keyObj['38'] = false;
        }
    }
}
