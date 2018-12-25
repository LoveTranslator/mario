class MovingEntity extends DynamicEntity {
    constructor(src, sx, sy, sWidth, sHeight, posX, posY, width, height) {
        super(src, sx, sy, sWidth, sHeight, posX, posY, width, height);

        this.sxAfterMovementSprite = this.sx;

        this.posXAfterMoving = this.posX;
        this.direction = 1;
        this.endPos = this.posX + 200;
        this.press = false;

    }

    moveEntity() {
        if (!this.press) {
            if (this.posX > this.endPos) {
                this.direction = -this.direction;
            }
            if (this.posX < this.posXAfterMoving) {
                this.direction = -this.direction;
            }
            this.movementSpriteSheet([this.sxAfterMovementSprite, this.sxAfterMovementSprite + this.sWidth], this.sy);
            this.posX += this.direction;
        }
    }

    deathEntity() {
        if (play.dynamicEntityArr.indexOf(this) !== -1) {
            play.dynamicEntityArr.splice(play.dynamicEntityArr.indexOf(this), 1);
        }

        if (play.buildEntityArr.indexOf(this) !== -1) {
            play.buildEntityArr.splice(play.buildEntityArr.indexOf(this), 1);
        }

        if (play.interactionEntityArr.indexOf(this) !== -1) {
            play.interactionEntityArr.splice(play.interactionEntityArr.indexOf(this), 1);
        }
    }
}
