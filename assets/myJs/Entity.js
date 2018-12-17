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
        /*console.log('1)', brick.posY + brick.height, '>', mario.posY);
        console.log('2)', brick.posY, '<', mario.posY + mario.height);
        console.log('3)', mario.posX, '<=', brick.posX + brick.width + 4);
        console.log('4)', mario.posX, '>=', brick.posX + brick.width + 1);*/
        ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    }
}
