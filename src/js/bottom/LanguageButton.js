import BaseElement from '../BaseElement';

class LanguageButton extends BaseElement {
    constructor(meister) {
        super(meister);

        this.element = document.createElement('div');

        this.classListAdd(this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        this.classListAdd(this.element, 'pf-icon', 'pf-icon_icLanguage');
        this.classListAdd(this.element, 'pf-ui-element-hidden');

        this.on('itemLanguages', (languages) => { this.onItemLanguages(languages); });
    }

    onItemUnloaded() {
        this.classListAdd(this.element, 'pf-ui-element-hidden');
    }

    onItemLanguages() {
        this.classListRemove(this.element, 'pf-ui-element-hidden');

        // TODO: Process languages.
    }
}

export default LanguageButton;
