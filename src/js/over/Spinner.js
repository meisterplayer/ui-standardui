import BaseElement from '../BaseElement';

class Spinner extends BaseElement {
    constructor(meister) {
        super(meister);

        this.meister = meister;

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-spinner-wrapper');

        this.spinner = document.createElement('div');
        this.classListAdd(this.spinner, 'pf-spinner-loading');
        this.element.appendChild(this.spinner);

        this.spinnerMessage = document.createElement('div');
        this.classListAdd(this.spinnerMessage, 'pf-spinner-message');
        this.element.appendChild(this.spinnerMessage);

        // Register events.
        this.on('playerBufferedEnough', () => this.hideSpinner(true));
        this.on('playerPause', () => this.hideSpinner());
        this.on('itemUnloaded', () => this.hideSpinner());
        this.on('playerPlay', () => this.hideSpinner());
        this.on('showLoading', (e) => { this.showSpinner(e); });
        this.on('hideLoading', (e) => this.hideSpinner(e));
    }

    showSpinner(e) {
        this.classListRemove(this.element, 'hidden');
        this.classListRemove(this.spinner, 'hidden');

        if (e && e.message) {
            this.spinnerMessage.innerHTML = e.message;
            this.classListRemove(this.spinnerMessage, 'hidden');
        } else if (e && e.code) {
            this.spinnerMessage.innerHTML = this.meister.Localization.get(e.code);
            this.classListRemove(this.spinnerMessage, 'hidden');
        }
    }

    hideSpinner(fromBuffering) {
        // HACK quick fix so other hides don't hide buffering indicator
        if (this.spinnerMessage.innerHTML === 'Buffering...' && !fromBuffering) {
            return;
        }

        this.classListAdd(this.element, 'hidden');
        this.classListAdd(this.spinner, 'hidden');
        this.classListAdd(this.spinnerMessage, 'hidden');
    }
}

export default Spinner;
