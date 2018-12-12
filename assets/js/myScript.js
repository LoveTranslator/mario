/*Возможно стоит отрисовывать объект не в самой функции build, а в методах right, left, jump*/
/*Разбить классы по файлам*/
/*Добавить класс отрисовки*/


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.toBuild();
    mario.toBuild();

    keyObj.movePlayer();

    requestAnimationFrame(draw);
}

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

class Area extends Entity {
    constructor(src) {
        super(src);
    }

    toBuild() {
        ctx.fillStyle = ctx.createPattern(this.img, 'repeat');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

class DynamicEntity extends Entity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
        this.frameDelay = 5;
        this.currentFrameDelay = 0;
    }

    changePos() {

    }

    movementSpriteSheet(arrPos, sy) {
        let frames = arrPos.length - 1;
        this.sx = arrPos[this.currentFrameDelay];
        console.log(sy, this.sy);
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

class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
    }

    moveLeft(jump) {
        this.posX -= 3;
        if (!jump) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }
    }

    moveRight(jump) {
        this.posX += 3;
        if (!jump) {
            this.movementSpriteSheet([245, 275, 305, 335], 0.01);
        }
    }
    
    jump(posY, direction) {
        this.jumpCount++;
        console.log(this.jumpHeight, this.jumpCount, this.jumpLength);
        this.jumpHeight = 2 * this.jumpLength * Math.sin(Math.PI * this.jumpCount / this.jumpLength);
        if (this.jumpCount > this.jumpLength) {
            this.jumpCount = 0;
            keyObj['38'] = false;
            this.jumpHeight = 0;
        }
        this.posY = canvas.height - this.jumpHeight - this.height;
        if (direction === 'left') {
            this.sx = 35;
            this.sy = 80;
        }
        if (direction === 'right') {
            this.sx = 395;
            this.sy = 80;
        }
    }

    addLife() {

    }

    removeLife() {

    }
}

let keyObj = {
    onkeydown: function(event) {
        keyObj[event.keyCode] = true;
    },
    onkeyup: function(event) {
        if (event.keyCode !== 38) {
            keyObj[event.keyCode] = false;
        }
    },
    movePlayer: function() {
        if (keyObj['37']) {
            if (keyObj['38']) {
                mario.moveLeft(1);
            }
            else {
                mario.moveLeft(0);
            }
        }
        if (keyObj['39']) {
            if (keyObj['38']) {
                mario.moveRight(1);
            }
            else {
                mario.moveRight(0);
            }
        }
        if (keyObj['38']) {
            if (keyObj['39']) {
                mario.jump(mario.posY, 'right');
            }
            else if (keyObj['37']) {
                mario.jump(mario.posY, 'left');
            }
            else {
                mario.jump(mario.posY);
            }
        }
    }
}



let background = new Area('assets/images/background1.png');
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 200, 360, 40, 40);

draw();

document.addEventListener('keydown', keyObj.onkeydown);
document.addEventListener('keyup', keyObj.onkeyup);
