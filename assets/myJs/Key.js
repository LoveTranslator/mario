class Key {
    constructor() {

    }
    onkeydown(event) {
        this[event.keyCode] = true;
        if (this['38'] && mario.slip) {
            this['38'] = false;
        }
        if (event.keyCode === 38 && mario.readyToJump) {
            mario.jumpLength = 50;
        }
        if (event.keyCode === 38 && mario.readyToJump) {
            mario.posYAfterJump = mario.posY;
        }
    }
    onkeyup(event) {
        if (event.keyCode !== 38) {
            this[event.keyCode] = false;
        }

        if (event.keyCode === 37) {
            mario.sy = 0;
            mario.sx = 186;
        }

        if (event.keyCode === 39) {
            mario.sy = 0;
            mario.sx = 246;
        }
    }
}
