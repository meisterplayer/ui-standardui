import BaseElement from '../BaseElement';

class PlayButton extends BaseElement {
    constructor(meister) {
        super(meister);

        this.isPlaying = true;

        this.element = document.createElement('div');
        this.meister.elementUtils.classListAdd(this.element,
            'pf-ui-element', 'pf-ui-element-left', 'pf-ui-element-active');

        // Default
        this.element.classList.add('.pf-icon');
        this.element.classList.add('.pf-icon_icPause');

        // Register event listeners
        this.element.addEventListener('click', () => this.onClick());

        this.on('playerPlay', () => {
            this.isPlaying = true;
            this.toggleIcon();
        });
        this.on('playerPause', () => {
            this.isPlaying = false;
            this.toggleIcon();
        });
        this.on('itemLoaded', () => this.toggleIcon());
    }

    onClick() {
        if (this.isPlaying) {
            this.meister.pause();
            this.isPlaying = false;
        } else {
            this.meister.play();
            this.isPlaying = true;
        }

        this.toggleIcon();
    }

    toggleIcon(state) {
        this.isPlaying = state !== undefined ? state : this.isPlaying;
        if (this.isPlaying) {
            this.element.classList.add('.pf-icon_icPause');
            this.element.classList.remove('.pf-icon_icPlay');
        } else {
            this.element.classList.remove('.pf-icon_icPause');
            this.element.classList.add('.pf-icon_icPlay');
        }
    }
}

export default PlayButton;
