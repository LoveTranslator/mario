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
        /*if (mario.posY + mario.height >= canvas.height && !mario.readyToJump) {
            mario.posY = canvas.height - mario.height;
            mario.jumpSpeed = -this.jumpSpeed;
            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
        }*/

        if (mario.posX <= (this.posX + this.width) && !mario.readyToJump) {
            if ((mario.posY + mario.height) >= this.posY && !mario.readyToJump) {
                mario.jumpSpeed = -mario.jumpSpeed;
                keyObj['38'] = false;
                mario.sx = 216;
                mario.sy = 0;
                mario.readyToJump = true;
            }
        }

        if (mario.posY + mario.height >= canvas.height && !mario.readyToJump) {
            mario.jumpSpeed = -mario.jumpSpeed;
            keyObj['38'] = false;
            mario.sx = 216;
            mario.sy = 0;
            mario.readyToJump = true;
        }
    }
}
