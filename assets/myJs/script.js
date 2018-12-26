const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let startButton = document.getElementById('start_game');
let menu = document.querySelector('menu');
let repeatButton = document.getElementById('repeat');
/*let audioOverworld = new AudioEvents('assets/audio/overworld.mp3', true, true);*/
let audioOverworld = new Audio;
audioOverworld.src = 'assets/audio/overworld.mp3';
audioOverworld.loop = true;
audioOverworld.volume = 0.5;
let audioJump = new AudioEvents('assets/audio/jump.mp3');
let audioDeath = new AudioEvents('assets/audio/death.mp3');
let game = new Game();
let area;
let mario;

let dynamicEntityArr = [];
let interactionEntityArr = [];
let buildEntityArr = [];
let entityArr = [];
let keyObj = new Key();


function start() {
    audioOverworld.play();
    menu.style.display = 'none';
    canvas.style.display = 'block';
    area = new Area('assets/images/background1.png', 5);
    mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 50, 328, 40, 40);

    game.lvl1();
    draw();
}

function repeat() {
    mario = new Mario('assets/images/mario.png', 216, 0, 16, 16, 50, 328, 40, 40);
    area = new Area('assets/images/background1.png', 5);

    interactionEntityArr.length = 0;
    buildEntityArr.length = 0;
    dynamicEntityArr.length = 0;
    entityArr.length = 0;

    game.lvl1();
    repeatButton.style.display = 'none';
}

function myMenu() {

    menu.style.display = 'flex';
    canvas.style.display = 'none';
    repeatButton.style.display = 'none';
}

myMenu();

repeatButton.addEventListener('click', repeat);
startButton.addEventListener('click', start);

document.addEventListener('keydown', keyObj.onkeydown.bind(keyObj));
document.addEventListener('keyup', keyObj.onkeyup.bind(keyObj));
