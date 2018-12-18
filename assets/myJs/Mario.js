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
        objectArr.forEach((item) => {
            if (item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX <= item.posX + item.width + 3 &&
                this.posX > item.posX + item.width) {
                stop = true;
            }
        });
        if (this.posX > 0 && !stop) {
            this.posX -= this.speedLeft;
        }
        if (!jump) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }
    }

    moveRight(jump) {
        let stop;
        objectArr.forEach((item) => {
            if (item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX + this.width >= item.posX - 3 &&
                this.posX + this.width < item.posX) {
                stop = true;
            }
        });
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

        objectArr.forEach(item => {
            if (this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width &&
                this.posY + this.height >= item.posY - 4 &&
                this.posY + this.height <= item.posY + 2 &&
                !this.readyToJump) {
                    
                this.posY = item.posY - this.height - 1;
                this.sx = 216;
                this.sy = 0;
                this.jumpCount = 0;
                this.jumpHeight = 0;
                this.readyToJump = true;
                keyObj['38'] = false;

            }
        })
    }

    slipBlock() {
        let countX = 0;
        let countY = 0;
        objectArr.forEach((item, i) => {

            if (!(this.posX + this.width >= item.posX &&
                    this.posX <= item.posX + item.width) &&
                this.readyToJump) {
                countX++;
            }

            if (this.posY + this.height >= item.posY - 15 &&
                this.posY + this.height <= canvas.height - 2 &&
                this.readyToJump) {
                countY++;
            }
        })
        if (countX == objectArr.length && countY > 0) {
            this.posY += 4;
        }
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
