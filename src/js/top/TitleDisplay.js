import BaseElement from '../BaseElement';

class TitleDisplay extends BaseElement {
    constructor(meister) {
        super(meister);

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-wrapper-left', 'pf-title');

        this.title = '';
        this.element.innerHTML = this.title;

        this.on('itemMetadata', (metadata) => this.onItemMetadata(metadata));
    }

    onItemUnloaded() {
        this.title = '';
        this.element.innerHTML = this.title;
    }

    onItemMetadata(metadata) {
        const title = metadata.title;
        if (typeof title === 'string' || title instanceof String) {
            this.title = metadata.title;
            this.element.innerHTML = this.title;
        }
    }
}

export default TitleDisplay;
