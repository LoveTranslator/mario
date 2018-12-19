/*Добавить класс отрисовки*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    buildArr.forEach(item => {
        item.toBuild();
    })

    area.moveMap();
    area.interactionWithMario();

    mario.move();
    mario.slipBlock();

    requestAnimationFrame(draw);
}

let area = new Area('assets/images/background1.png', 5);
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 50, 328, 40, 40);
let brick = new Entity('assets/images/custom.png', 0, 31, 16, 16, 0, 368, 32, 32);
let brick2 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 32, 368, 32, 32);
let brick3 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 64, 368, 32, 32);
let brick4 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 96, 368, 32, 32);
let brick5 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 128, 368, 32, 32);
let brick6 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 160, 368, 32, 32);
let brick7 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 192, 368, 32, 32);
let brick8 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 224, 368, 32, 32);
let brick9 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 256, 368, 32, 32);
let brick10 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 288, 368, 32, 32);
let brick11 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 320, 368, 32, 32);
let brick12 = new Entity('assets/images/custom.png', 0, 31, 16, 16, 352, 368, 32, 32);

let pipe = new Entity('assets/images/misc-2.png', 270, 402, 33, 48, 100, 272, 62, 96);
let keyObj = new Key();

let objectArr = [];
objectArr.push(brick);
objectArr.push(brick2);
objectArr.push(brick3);
objectArr.push(brick4);
objectArr.push(brick5);
objectArr.push(brick6);
objectArr.push(brick7);
objectArr.push(brick8);
objectArr.push(brick9);
objectArr.push(brick10);
objectArr.push(brick11);
objectArr.push(brick12);
objectArr.push(pipe);

let buildArr = [];
buildArr.push(area);
buildArr.push(mario);
buildArr.push(brick);
buildArr.push(brick2);
buildArr.push(brick3);
buildArr.push(brick4);
buildArr.push(brick5);
buildArr.push(brick6);
buildArr.push(brick7);
buildArr.push(brick8);
buildArr.push(brick9);
buildArr.push(brick10);
buildArr.push(brick11);
buildArr.push(brick12);
buildArr.push(pipe);


draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
