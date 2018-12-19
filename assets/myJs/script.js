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


let pipe = new Entity('assets/images/misc-2.png', 270, 402, 33, 48, 100, 272, 62, 96);
let keyObj = new Key();

let mytestArr = [];
let objectArr = [];
let buildArr = [];
let countBrick = 0;

function createBrickArray(posX, count) {

    for (let i = 0; i < count; i++) {
        mytestArr[countBrick] = new Entity('assets/images/custom.png', 0, 31, 16, 16, posX, 368, 32, 32);
        posX += 32;
        countBrick++;
    }
}

createBrickArray(0, 12);
createBrickArray(500, 10);
createBrickArray(900, 10);

objectArr.push(pipe);
objectArr.push(...mytestArr);
buildArr.push(area);
buildArr.push(mario);
buildArr.push(pipe);
buildArr.push(...mytestArr);




draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
