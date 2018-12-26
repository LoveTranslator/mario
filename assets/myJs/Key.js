class Key {
    constructor() {

    }
    onkeydown(event) {
        if (!mario.deathFlag) {
            this[event.keyCode] = true;
        }
        if (mario.deathFlag) {
            this[event.keyCode] = false;
        }
        if (this['38'] && mario.slip) {
            this['38'] = false;
        }
        if (event.keyCode === 38 && mario.readyToJump) {
            audioJump.playing();
            mario.jumpLength = 50;
        }
        if (event.keyCode === 38 && mario.readyToJump) {
            mario.posYAfterJump = mario.posY;
        }

        if (event.keyCode === 37) {
            mario.runLeft = true;
        }
        if (event.keyCode === 39) {
            mario.runRight = true;
        }

        if (event.keyCode === 38 && this['38'] && !mario.deathFlag) {
            mario.jumpFlag = true;
        }
    }

    onkeypress(event) {
        console.log(event.keyCode);
        if (mario.deathFlag) {
            this[event.keyCode] = false;
        }
    }

    onkeyup(event) {
        if (event.keyCode !== 38) {
            this[event.keyCode] = false;
        }

        if (event.keyCode === 37) {
            mario.runLeft = false;
        }

        if (event.keyCode === 39) {
            mario.runRight = false;
        }
    }
}
