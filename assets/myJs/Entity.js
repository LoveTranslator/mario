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
}
