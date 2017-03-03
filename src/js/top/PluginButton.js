import BaseElement from '../BaseElement';

class PluginButton extends BaseElement {
    constructor(name, icon, meister) {
        super(meister);

        this.element = document.createElement('div');
        this.classListAdd(this.element,
            'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active', 'pf-plugin-overlay-open-button');

        // TODO: Make this clever
        this.element.innerHTML = icon;
        this.name = name;

        this.element.addEventListener('click', () => {
            this.meister.trigger('uiPluginOpen', {
                name: this.name,
            });
        });
    }
}

export default PluginButton;
