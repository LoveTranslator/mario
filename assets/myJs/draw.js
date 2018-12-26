function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    buildEntityArr.forEach((item, i) => {
        if (item === area || item.posX + item.width > 0 && item.posX < canvas.width) {
            item.toBuild();
        }
    });

    interactionEntityArr.forEach((item, i) => {
        if (item.posX + item.width < 0 && !item.hasOwnProperty('posXAfterMoving')) {
            interactionEntityArr.splice(i, 1);
        }
    });

    dynamicEntityArr.forEach(item => {
        item.moveEntity();
    })

    area.moveMap();
    area.interactionWithMario();
    mario.move();
    mario.slipBlock();
    mario.interactionWithEntity();
    mario.sprite();

    requestAnimationFrame(draw);
}
