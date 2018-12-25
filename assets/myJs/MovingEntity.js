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
        if (dynamicEntityArr.indexOf(this) !== -1) {
            dynamicEntityArr.splice(dynamicEntityArr.indexOf(this), 1);
        }

        if (buildEntityArr.indexOf(this) !== -1) {
            buildEntityArr.splice(buildEntityArr.indexOf(this), 1);
        }

        if (interactionEntityArr.indexOf(this) !== -1) {
            interactionEntityArr.splice(interactionEntityArr.indexOf(this), 1);
        }
    }
}
