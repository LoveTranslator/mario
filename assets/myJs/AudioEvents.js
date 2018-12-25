class AudioEvents {
    constructor(src, autoplay, loop) {
        this.audio = new Audio;
        this.audio.src = src;
        if (autoplay) {
            this.audio.autoplay = true;
        }
        if (loop) {
            this.audio.loop = true;
        }
    }

    playing() {
        this.audio.play();
    }
}
