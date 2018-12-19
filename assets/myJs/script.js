/*Добавить класс отрисовки*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let interactionEntityArr = [];
let buildEntityArr = [];

let area = new Area('assets/images/background1.png', 5);
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 50, 328, 40, 40);
let keyObj = new Key();
buildEntityArr.push(area);
buildEntityArr.push(mario);

createEntity(Entity, 'assets/images/custom.png', 0, 31, 16, 16, 0, 368, 32, 32, 34);
createEntity(Entity, 'assets/images/misc-2.png', 309, 417.7, 31.75, 31.75, 450, 304, 64, 64, 1);
createEntity(Entity, 'assets/images/misc-2.png', 270, 402, 33, 48, 608, 272, 64, 96, 1);
createEntity(Entity, 'assets/images/misc-2.png', 230.25, 385.25, 32.25, 64.25, 800, 239.5, 65, 128.5, 1);

function createEntity(myClass, src, sx, sy, sWidth, sHeight, posX, posY, width, height, count) {
    let entityArr = [];
    for (let i = 0; i < count; i++) {
        entityArr[i] = new myClass(src, sx, sy, sWidth, sHeight, posX, posY, width, height);
        posX += width;
    }
    buildEntityArr.push(...entityArr);
    interactionEntityArr.push(...entityArr);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildEntityArr.forEach(item => {
        item.toBuild();
    })

    area.moveMap();
    area.interactionWithMario();

    mario.move();
    mario.slipBlock();

    requestAnimationFrame(draw);
}


draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
