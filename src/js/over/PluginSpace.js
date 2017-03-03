import BaseElement from '../BaseElement';

class PluginSpace extends BaseElement {
    constructor(meister, controls) {
        super(meister);

        this.controls = controls;

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-plugin-overlay');
        this.classListAdd(this.element, 'pf-ui-element-hidden');

        // Stop the click event so the player won't play/pause.
        this.element.addEventListener('click', (e) => {
            const clickEvent = e || event;
            clickEvent.stopPropagation();
        });

        this.closeButton = document.createElement('div');
        this.classListAdd(this.closeButton,
            'pf-ui-element-active', 'pf-plugin-overlay-close-button');
        this.closeButton.innerHTML = '✖︎';
        this.closeButton.addEventListener('click', this.closeSpace.bind(this));

        this.element.appendChild(this.closeButton);

        this.on('uiPluginOpen', this.onPluginOpen.bind(this));
    }

    closeSpace() {
        this.meister.trigger('uiPluginClose');
        this.classListAdd(this.element, 'pf-ui-element-hidden');
    }

    onPluginOpen() {
        this.classListRemove(this.element, 'pf-ui-element-hidden');
    }
}

export default PluginSpace;
