class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        /*переменные для расчёта прыжка*/
        this.posYAfterJump = 0;
        this.speedLeft = 3;
        this.speedRight = 3;
        this.readyToJump = true;
        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
    }

    moveLeft(jump) {
        let stop;
        myArr.forEach(function(item) {
            if (item.posY + item.height > mario.posY &&
                item.posY < mario.posY + mario.height &&
                mario.posX <= item.posX + item.width + 4 &&
                mario.posX >= item.posX + item.width + 1) {
                stop = true;
            }
        })
        if (this.posX > 0 && !stop) {
            this.posX -= this.speedLeft;
        }
        if (!jump) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }
    }

    moveRight(jump) {
        let stop;
        myArr.forEach(function(item) {
            if (item.posY + item.height > mario.posY &&
                item.posY < mario.posY + mario.height &&
                mario.posX + mario.width >= item.posX - 4 &&
                mario.posX + mario.width <= item.posX - 1) {
                stop = true;
            }
        })
        if (this.posX < 460 && !stop) {
            this.posX += this.speedRight;
        }
        if (!jump) {
            this.movementSpriteSheet([245, 275, 305, 335], 0.01);
        }
    }

    jump(direction) {
        this.readyToJump = false;

        this.jumpCount++;
        this.jumpHeight = 2 * this.jumpLength * Math.sin(Math.PI * this.jumpCount / this.jumpLength);

        this.posY = this.posYAfterJump - this.jumpHeight;

        if (direction === 'left') {
            this.sx = 35;
            this.sy = 80;
        }

        if (direction === 'right') {
            this.sx = 395;
            this.sy = 80;
        }
    }

    interactionWithItem(item) {
        /*ПОДБИТЬ ВСЕ ПОГРЕШНОСТИ !!!!*/

        /*console.log(this.posX + this.width, '>=', item.posX);
        console.log(this.posX, '<=', item.posX + item.width);
        console.log(this.posY + this.height, '>=', item.posY - 4);
        console.log(this.posY + this.height, '<=', item.posY);
        console.log(!this.readyToJump);*/

        /*Остановка прыжка при попадании на объект*/
        if (this.posX + this.width >= item.posX &&
            this.posX <= item.posX + item.width &&
            this.posY + this.height >= item.posY - 4 &&
            this.posY + this.height <= item.posY &&
            !this.readyToJump) {

            keyObj['38'] = false;
            this.sx = 216;
            this.sy = 0;
            this.readyToJump = true;
            this.jumpCount = 0;
            this.jumpHeight = 0;
        }

        // 'сползание' с блоков
        /*if (!(this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width) &&
            this.posY + this.height >= item.posY - 4 &&
            this.posY + this.height <= canvas.height - 1 &&
            this.readyToJump) {
            this.posY += 4;
        }*/
    }

    move() {
        // Если нажата <-
        if (keyObj['37']) {
            if (keyObj['38']) {
                this.moveLeft(1);
            }
            else {
                this.moveLeft(0);
            }
        }

        // Если нажата -> 
        if (keyObj['39']) {
            if (keyObj['38']) {
                this.moveRight(1);
            }
            else {
                this.moveRight(0);
            }
        }

        // Если нажата клавиша вверх ^
        if (keyObj['38']) {
            if (keyObj['39']) {
                this.jump('right');
            }
            else if (keyObj['37']) {
                this.jump('left');
            }
            else {
                this.jump();
            }
        }
    }

    addLife() {

    }

    removeLife() {

    }
}
