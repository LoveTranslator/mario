const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let startButton = document.getElementById('start_game');
let menu = document.querySelector('menu');

let area = new Area('assets/images/background1.png', 5);
let mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 50, 328, 40, 40);
let keyObj = new Key();
let play = new Game();

function start() {
    menu.style.display = 'none';
    canvas.style.display = 'block';
    play.lvl1();
    play.draw();
}

function myMenu() {
    /*play.audioOverworld.playing();*/
    menu.style.display = 'flex';
    canvas.style.display = 'none';
}

myMenu();
startButton.addEventListener('click', start);
document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
