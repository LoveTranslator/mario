class Key {
    constructor() {

    }
    onkeydown(event) {
        this[event.keyCode] = true;
    }
    onkeyup(event) {
        if (event.keyCode !== 38) {
            this[event.keyCode] = false;
        }
        
        if (event.keyCode === 37) {
            mario.sx = 186;
        }
        
        if(event.keyCode === 39) {
            mario.sx = 246;
        }
    }
    movePlayer() {
        if (this['37']) {
            if (this['38']) {
                mario.moveLeft(1);
            }
            else {
                mario.moveLeft(0);
            }
        }
        if (this['39']) {
            if (this['38']) {
                mario.moveRight(1);
            }
            else {
                mario.moveRight(0);
            }
        }
        if (this['38']) {
            if (this['39']) {
                mario.jump(mario.posY, 'right');
            }
            else if (this['37']) {
                mario.jump(mario.posY, 'left');
            }
            else {
                mario.jump(mario.posY);
            }
        }
    }
}