class Mario extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        this.posYAfterJump = 0; // Позиция марио по X в момент прыжка.
        this.speedLeft = 3; // Скорость движения влево.
        this.speedRight = 3; // Скорость движения вправо.
        this.readyToJump = true; // Флаг, готовности марио к прыжку.
        this.jumpFlag = false; // Флаг, находится ли марио в прыжке

        /*Переменные для расчёта прыжка*/
        this.jumpCount = 0;
        this.jumpLength = 50;
        this.jumpHeight = 0;
        this.jumpIncrement = 0;

        this.runLeft = false; // Флаг на бег марио влево
        this.runRight = false; // Флаг на бег марио вправо

        this.countY = 0; // Счётчтик, Марио не стоит на объекте, но под ним ниже есть объекты
        this.countXY = 0; // Счётчик, Марио стоит на объекте 

        this.stopRight = false; // Флаг на остановку вправо.
        this.stopLeft = false; // Флаг на остановку влево.
        this.slip = false; // Флаг на 'сползания' с блока.
        this.deathFlag = false;
    }

    moveLeft() {
        if (this.posX > 0 && !this.stopLeft) {
            this.posX -= this.speedLeft;
        }
    }

    moveRight(jump) {
        if (this.posX < 460 && !this.stopRight) {
            this.posX += this.speedRight;
        }
    }

    jump() {
        this.readyToJump = false;
        this.jumpCount++;
        this.jumpIncrement = Math.sin(Math.PI * this.jumpCount / this.jumpLength);
        this.jumpHeight = 2 * this.jumpLength * this.jumpIncrement;
        this.posY = this.posYAfterJump - this.jumpHeight;
    }

    slipBlock() { // неверно отрабатывает функция!!!!
        this.slip = true;

        // падает пока не приземлиться на объект
        if (this.countY > 0 && this.countXY === 0 && this.readyToJump) {
            this.posY += 4;
        }
        else {
            this.slip = false;
        }
    }

    move() {
        // Если нажата <-
        if (keyObj['37']) {
            this.moveLeft();
        }

        // Если нажата -> 
        if (keyObj['39']) {
            this.moveRight();
        }

        // Если нажата клавиша вверх ^
        if (keyObj['38']) {
            this.jump();
        }

        // Если марио погиб
        if (this.deathFlag) {
            this.death();
        }
    }

    stopJump() {
        this.jumpCount = 0;
        this.jumpHeight = 0;
        this.readyToJump = true;
        this.jumpFlag = false;
        keyObj['38'] = false;
    }

    interactionWithEntity() {
        this.stopRight = false;
        this.stopLeft = false;
        this.countY = 0;
        this.countXY = 0;
        interactionEntityArr.forEach((item) => {

            /*Остановка движения, лево*/
            if (item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX <= item.posX + item.width + 3 &&
                this.posX > item.posX + item.width) {
                this.stopLeft = true;
            }

            /*Остановка движения, право*/
            if (item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX + this.width >= item.posX - 3 &&
                this.posX + this.width < item.posX) {
                this.stopRight = true;
            }

            /*Если марио ударился об потолок при прыжке*/
            if (item.posY + item.height - 4 <= this.posY &&
                item.posY + item.height + 3 >= this.posY &&
                this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width) {
                this.jumpLength = (this.posYAfterJump - this.posY) / 2;
            }

            /*Если марио запрыгнул на объект*/
            if (this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width &&
                this.posY + this.height >= item.posY - 5 &&
                this.posY + this.height <= item.posY + 2 &&
                !this.readyToJump) {
                this.posY = item.posY - this.height - 1;
                this.stopJump();
            }

            /*Фикс бага при зацикливании прыжка*/
            if (this.jumpIncrement === -1) {
                if (this.posX + this.width >= item.posX &&
                    this.posX <= item.posX + item.width) {
                    this.stopJump();
                }
            }

            // Марио не стоит на блоке, но под ним ниже есть N колво блоков
            if (!(this.posX + this.width >= item.posX &&
                    this.posX <= item.posX + item.width) &&
                this.posY + this.height >= item.posY - 4 &&
                this.posY + this.height <= canvas.height - 2) {
                this.countY++;
            }
            // Стоит ли марио на каком-то блоке
            if (this.posY + this.height >= item.posY - 4 &&
                this.posY + this.height <= item.posY &&
                this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width) {
                this.countXY++;
            }
        });

        dynamicEntityArr.forEach((item, i) => {

            /*Смерть)*/
            if (item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX + this.width >= item.posX - 3 &&
                this.posX + this.width < item.posX ||
                item.posY + item.height > this.posY &&
                item.posY < this.posY + this.height &&
                this.posX <= item.posX + item.width + 3 &&
                this.posX > item.posX + item.width) {
                this.deathFlag = true;
                this.jumpLength = 10;
                this.posYAfterJump = this.posY;
                interactionEntityArr.length = 0;
            }
            
            /*press объекта*/
            if (this.posY + this.height >= item.posY - 4 &&
                this.posY + this.height <= item.posY &&
                this.posX + this.width >= item.posX &&
                this.posX <= item.posX + item.width && !this.deathFlag) {
                console.log(!this.deathFlag);
                item.press = true;
                item.sx = 304;
                item.sy = 24;
                item.sHeight = 8;
                item.height = 16;
                item.posY = 352.5;
            }

            if (item.press) {
                setTimeout(item.deathEntity.bind(item), 400);
            }


        })
    }

    sprite() {
        if (this.slip && this.runLeft && !this.deathFlag) {
            this.sx = 5;
            this.sy = 40;
        }

        if (this.slip && this.runRight && !this.deathFlag) {
            this.sx = 425;
            this.sy = 40;
        }

        // Выбор спрайта при нажатой ->
        if (this.jumpFlag && this.runRight && !this.deathFlag) {
            this.sx = 395;
            this.sy = 80;

        }
        // Выбор спрайта при нажатой <- 
        if (this.jumpFlag && this.runLeft && !this.deathFlag) {
            this.sx = 35;
            this.sy = 80;
        }

        if (!this.jumpFlag && !this.runLeft && !this.runRight && !this.deathFlag) {
            this.sx = 216;
            this.sy = 0;
        }

        if (!this.jumpFlag && !this.slip && this.runLeft && !this.deathFlag) {
            this.movementSpriteSheet([95, 125, 155, 185], 0.01);
        }

        if (!this.jumpFlag && !this.slip && this.runRight && !this.deathFlag) {
            this.movementSpriteSheet([245, 275, 305, 335], 0.01);
        }

        if (this.deathFlag) {
            this.sx = 215;
            this.sy = 120;
        }
    }

    death() {

        if (this.jumpIncrement !== -1) {
            this.jump();
        }
        if (this.jumpIncrement === -1) {
            this.posY += 2;
        }
    }
}
