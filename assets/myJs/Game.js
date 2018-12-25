class Game {
    constructor() {
        this.dynamicEntityArr = [];
        this.interactionEntityArr = [];
        this.buildEntityArr = [];
        this.entityArr = [];

        this.audioOverworld = new AudioEvents('assets/audio/overworld.mp3', true, true);
        this.audioJump = new AudioEvents('assets/audio/jump.mp3');
        this.audioDeath = new AudioEvents('assets/audio/death.mp3');
    }
    lvl1() {
        this.buildEntityArr.push(area);
        this.buildEntityArr.push(mario);

        this.createEntity(Entity, 'assets/images/custom.png', 0, 31, 16, 16, 0, 368, 32, 32, 34); // кирпичи под ногами

        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 248, 150, 32, 32, 1); // кирпич с вопросом

        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 200, 250, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 232, 250, 32, 32, 1); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 264, 250, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 296, 250, 32, 32, 1); // обычный кирпич

        this.createEntity(Entity, 'assets/images/misc-2.png', 309, 417.7, 31.75, 31.75, 450, 304, 64, 64, 1); // труба low
        this.createEntity(Entity, 'assets/images/misc-2.png', 270, 402, 33, 48, 608, 272, 64, 96, 1); // труба middle
        this.createEntity(Entity, 'assets/images/misc-2.png', 230.25, 385.25, 32.25, 64, 800, 239.5, 65, 128.5, 1); // труба high

        this.createEntity(Entity, 'assets/images/custom.png', 0, 31, 16, 16, 1200, 368, 32, 32, 15); // кирпичи под ногами

        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 1400, 270, 32, 32, 1); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 1432, 270, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 1464, 270, 32, 32, 1); // обычный кирпич

        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 1600, 200, 32, 32, 8); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 2000, 200, 32, 32, 4); // обычный кирпич

        this.createEntity(Entity, 'assets/images/custom.png', 0, 31, 16, 16, 2100, 368, 32, 32, 33); // кирпичи под ногами
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 2250, 270, 32, 32, 2); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 2400, 270, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 2500, 270, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 2500, 180, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 0, 0, 16, 16, 2600, 270, 32, 32, 1); // кирпич с вопросом
        this.createEntity(Entity, 'assets/images/custom.png', 96, 0, 16, 16, 2750, 270, 32, 32, 2); // обычный кирпич

        this.createEntity(Entity, 'assets/images/custom.png', 48, 0, 16, 16, 2996, 336, 32, 32, 5); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 48, 0, 16, 16, 3028, 304, 32, 32, 4); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 48, 0, 16, 16, 3060, 272, 32, 32, 3); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 48, 0, 16, 16, 3092, 240, 32, 32, 2); // обычный кирпич
        this.createEntity(Entity, 'assets/images/custom.png', 48, 0, 16, 16, 3126, 208, 32, 32, 1); // обычный кирпич

        this.createEntity(Entity, 'assets/images/custom.png', 0, 31, 16, 16, 3300, 368, 32, 32, 33); // кирпичи под ногами

        this.createEntity(Entity, 'assets/images/misc-2.png', 248, 864, 31, 80, 3600, 208, 62, 160, 1); // крепость, левая часть
        this.createEntity(Entity, 'assets/images/misc-2.png', 279, 864, 48, 80, 3662, 208, 96, 160, 1); // крепость, правая часть

        this.createEntity(MovingEntity, 'assets/images/custom.png', 272.5, 16.5, 15.75, 15.75, 110, 336.5, 33, 31.5, 1); // гриб
        this.buildEntityArr.push(...this.entityArr);
        this.interactionEntityArr.push(...this.entityArr);
        this.buildEntityArr.push(mario);
    }

    createEntity(myClass, src, sx, sy, sWidth, sHeight, posX, posY, width, height, count) {
        let i = this.entityArr.length;
        count = count + this.entityArr.length;
        for (i; i < count; i++) {
            this.entityArr[i] = new myClass(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
            posX += width;
            if (myClass === MovingEntity) {
                this.dynamicEntityArr.push(this.entityArr[i]);
            }
        }
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.buildEntityArr.forEach((item, i) => {
            if (item === area || item.posX + item.width > 0 && item.posX < canvas.width) {
                item.toBuild();
            }
        });

        this.interactionEntityArr.forEach((item, i) => {
            if (item.posX + item.width < 0 && !item.hasOwnProperty('posXAfterMoving')) {
                this.interactionEntityArr.splice(i, 1);
            }
        });

        this.dynamicEntityArr.forEach(item => {
            item.moveEntity();
        })

        area.moveMap();
        area.interactionWithMario();
        mario.move();
        mario.slipBlock();
        mario.interactionWithEntity();
        mario.sprite();

        requestAnimationFrame(this.draw.bind(this));
    }
}
