/*Добавить класс отрисовки*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    area.toBuild();
    mario.toBuild();
    brick.toBuild();
    brick2.toBuild();
    pipe.toBuild();

    area.interactionWithMario();

    mario.move();
    mario.slipBlock();

    requestAnimationFrame(draw);
}

let area = new Area('assets/images/background1.png');
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 200, 360, 40, 40);
let brick = new Entity('assets/images/custom.png', 0, 31, 17, 17, 300, 360, 34, 34);
let brick2 = new Entity('assets/images/custom.png', 0, 31, 17, 17, 266, 360, 34, 34);
let pipe = new Entity('assets/images/misc-2.png', 270, 402, 33, 48, 100, 304, 62, 96);
let keyObj = new Key();

let objectArr = [];
objectArr.push(brick);
objectArr.push(brick2);
objectArr.push(pipe);

draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
