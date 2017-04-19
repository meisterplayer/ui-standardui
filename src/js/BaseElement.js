import { classListAdd, classListRemove } from './utils/ElementUtils';

class BaseElement {
    constructor(meister) {
        this.meister = meister;
        this.isMobile = this.meister.browser.isMobile;

        this.element = null;

        this.eventStore = [];

        if (this.onItemUnloaded) {
            this.on('itemUnloaded', (e) => { this.onItemUnloaded(e); });
        }
    }

    on(hook, handler) {
        this.eventStore.push(...this.meister.on(hook, handler, this.constructor.name));
    }

    one(hook, block, handler) {
        this.eventStore.push(...this.meister.one(hook, block, handler, this.constructor.name));
    }

    classListAdd(...args) {
        if (this.isMobile) args.push('pf-mobile');
        classListAdd(...args);
    }

    // eslint-disable-next-line class-methods-use-this
    classListRemove(...args) {
        classListRemove(...args);
    }

    getNode() {
        return this.element;
    }

    showElement() {
        this.classListRemove(this.element, 'pf-ui-element-hidden');
    }

    hideElement() {
        this.classListAdd(this.element, 'pf-ui-element-hidden');
    }
}

export default BaseElement;
