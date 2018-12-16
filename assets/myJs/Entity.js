class Entity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {

        this.img = new Image();
        this.img.src = src;

        this.sx = sx;
        this.sy = sy;
        this.sWidth = sWidth;
        this.sHeight = sHeight;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }

    loading() {
        this.img.onload = () => true;
    }

    toBuild() {
        ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    }

    interactionWithMario() {

        if (mario.posY + mario.height >= canvas.height - 5 && !mario.readyToJump) {
            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
            mario.jumpCount = 0;
            mario.jumpHeight = 0;
        }

        /*Логика взаимодействия марио и объекта*/
        if (mario.posX + mario.width >= this.posX && mario.posX <= this.posX + this.width && mario.posY + mario.height >= this.posY && !mario.readyToJump) {
            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
            mario.jumpCount = 0;
            mario.jumpHeight = 0;

        }

        if (this.posY + this.height > mario.posY && this.posY < mario.posY + mario.height && mario.posX <= this.posX + this.width + 4 && mario.posX >= this.posX + this.width + 1) {
            mario.speedLeft = 0;
        }
        else {
            mario.speedLeft = 3;
        }


        if (this.posY + this.height > mario.posY && this.posY < mario.posY + mario.height && mario.posX + mario.width >= this.posX - 4 && mario.posX + mario.width <= this.posX - 1) {
            mario.speedRight = 0;
        }
        else {
            mario.speedRight = 3;
        }


        /*if ((!(mario.posX + mario.width >= this.posX && mario.posX <= this.posX + this.width && mario.posY + mario.height >= this.posY)) ) {
            mario.posY += 3;
        }*/
    }
}
