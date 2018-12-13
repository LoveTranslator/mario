/*Добавить класс отрисовки*/
/*Возможно стоит запоминать posY марио перед прыжком и исходя из него рассчитывать формулу*/
/*Возможно марио прыгает и падает, конечной точки нету, пока не приземлится на какой-либо объект*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    area.toBuild();
    area.interactionWithMario(canvas);
    mario.toBuild();
    brick.toBuild();
    brick.interactionWithMario();

    keyObj.movePlayer();

    requestAnimationFrame(draw);
}

let area = new Area('assets/images/background1.png');
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 200, 360, 40, 40);
let keyObj = new Key();
let brick = new Brick('assets/images/custom.png', 0, 31, 17, 17, 0, 360, 34, 34);

draw();

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
