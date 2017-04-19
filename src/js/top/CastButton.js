import noop from 'noop2';
import BaseElement from '../BaseElement';

class CastButton extends BaseElement {
    constructor(meister, config) {
        super(meister);

        // this.element = document.createElement('div');
        this.element = document.createElement('button', 'google-cast-button');
        this.classListAdd(this.element,
            'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active', 'pf-ui-element-hidden', 'pf-cast-button');
        this.classListAdd(this.element, 'pf-icon');

        this.onClick = noop;

        if (window.WebKitPlaybackTargetAvailabilityEvent && config.enableAirPlay) {
            this.on('playerCreated', () => {
                this.enableAirplay();
            });
        }

        this.isChromecastAvailible((available) => {
            if (!available) {
                return;
            }

            this.classListRemove(this.element, 'pf-ui-element-hidden');
        });
    }

    isChromecastAvailible(onStatusChange, tries = 5) {
        if (tries === 0) {
            onStatusChange(false);
        }

        if (!this.meister.browser.isChrome) {
            onStatusChange(false);
            return;
        }

        if (window.chrome && window.chrome.cast) {
            onStatusChange(true);
            return;
        }

        setTimeout(() => {
            this.isChromecastAvailible(onStatusChange, tries - 1);
        }, 1000);
    }

    enableAirplay() {
        // If there is no player to add a listener to return. Should be redundant
        if (!this.meister.playerPlugin) return;

        const self = this;
        this.meister.playerPlugin.mediaElement.addEventListener('webkitplaybacktargetavailabilitychanged', function (e) { //eslint-disable-line
            // @TODO Can anyone look at this part and why it gives errors?
            switch (e.availability) {
            case 'available':
                if (self.meister.config.debug) {
                    console.log('AirPlay is available');
                }

                self.element.classList.remove('pf-ui-element-hidden');
                self.element.classList.add('pf-icon_icAirplay');

                self.onClick = () => this.webkitShowPlaybackTargetPicker();
                break;

            case 'not-available':
                if (self.meister.config.debug) {
                    console.log('airplay not available');
                }

                self.element.classList.add('pf-ui-element-hidden');
                self.element.classList.remove('pf-icon_icAirplay');

                self.onClick = noop;
                break;
            default:
                break;
            }
        });
    }

}

export default CastButton;
