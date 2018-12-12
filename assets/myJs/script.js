/*Возможно стоит отрисовывать объект не в самой функции build, а в методах right, left, jump*/
/*Разбить классы по файлам*/
/*Добавить класс отрисовки*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    area.toBuild();
    mario.toBuild();
    brick.toBuild();
    brick.interactionWithBlocks();

    keyObj.movePlayer();

    requestAnimationFrame(draw);
}

let area = new Area('assets/images/background1.png');
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 200, 360, 40, 40);
let keyObj = new Key();
let brick = new Brick('assets/images/custom.png', 0, 31, 17, 17, 0, 360, 34, 34);
let entity = [];
entity.push(brick);
console.log(brick);


draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
