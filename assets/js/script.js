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
    constructor(src) {
        this.img = new Image();
        this.img.src = src;
    }

    loading() {
        this.img.onload = () => true;
    }

    toBuild() {

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
    constructor(src) {
        super(src);
    }

    changePos() {

    }
}

class Mario extends DynamicEntity {
    constructor(src, posX, posY) {
        super(src);
        this.posX = posX; // позиция марио по x на холсте 
        this.posY = posY; // позиция марио по y на холсте
        this.sx = 216; // стартовое значение при отрисовки марио, т.е. позиция данного марио на карте спрайтов
        this.sy = 0;
        this.width = 40; // ширина марио 
        this.height = 44; // высота марио 
        this.sWidth = 16;
        this.sHeight = 16;

        this.frameDelay = 5;
        this.currentFrameDelay = 0;

        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
    }

    toBuild() {
        console.log(this.sx, this.sy, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
        ctx.drawImage(this.img, this.sx, 0, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
    }

    moveLeft() {
        this.posX -= 3;
        this.movementSpriteSheet([95, 125, 155, 185]);
    }

    moveRight() {
        this.posX += 3;
        this.movementSpriteSheet([245, 275, 305, 335]);
    }

    jump() {
        this.jumpCount++;
        this.jumpHeight = 2 * this.jumpLength * Math.sin(Math.PI * this.jumpCount / this.jumpLength);
        if (this.jumpCount > this.jumpLength) {
            this.jumpCount = 0;
            keyObj['38'] = false;
            this.jumpHeight = 0;
        }
        console.log(this.posY);
        this.posY = canvas.height - this.jumpHeight - this.height;
    }

    addLife() {

    }

    removeLife() {

    }

    movementSpriteSheet(arrPos, sy) {
        let frames = arrPos.length - 1;
        this.sx = arrPos[this.currentFrameDelay];
        this.sy = sy || 0;
        if (this.frameDelay) {
            ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.posX, this.posY, this.width, this.height);
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
            mario.moveLeft();
        }
        if (keyObj['39']) {
            mario.moveRight()
        }
        if (keyObj['38']) {
            mario.jump();
        }
    }
}



let background = new Area('assets/images/background1.png');

let mario = new Mario('assets/images/mario.png', 200, 364);

draw();

document.addEventListener('keydown', keyObj.onkeydown);
document.addEventListener('keyup', keyObj.onkeyup);
