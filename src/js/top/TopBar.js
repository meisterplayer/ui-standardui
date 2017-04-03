import TitleDisplay from './TitleDisplay';
import CastButton from './CastButton';
import BaseElement from '../BaseElement';
import PluginButton from './PluginButton';

class TopBar extends BaseElement {
    constructor(config, meister) {
        super(meister);

        this.config = config;

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-control-bar', 'top');

        // Construct and append top left half.
        this.titleDisplay = new TitleDisplay(meister);
        this.element.appendChild(this.titleDisplay.getNode());

        // Construct top right half.
        this.topRightWrapper = document.createElement('div');
        this.classListAdd(this.topRightWrapper, 'pf-ui-wrapper-right');

        if (!this.config.castButton || !this.config.castButton.hide) {
            this.castButton = new CastButton(meister, config);
            this.topRightWrapper.appendChild(this.castButton.getNode());
        }

        // Append top right half
        this.element.appendChild(this.topRightWrapper);

        // Hide/show on plugin overlay
        this.on('uiPluginOpen', () => this.onPluginOpen());
        this.on('uiPluginClose', () => this.onPluginClose());

        // Listen for plugins that want to add buttons.
        this.on('uiPluginInserted', (info) => this.insertPlugin(info));

        // Clicks inside the control bars shouldn't play/pause the player.
        this.element.addEventListener('click', (e) => {
            const clickEvent = e || event;
            clickEvent.stopPropagation();
        });
    }

    onPluginOpen() {
        this.classListAdd(this.element, 'pf-ui-overlay-active');
    }

    onPluginClose() {
        this.classListRemove(this.element, 'pf-ui-overlay-active');
    }

    insertPlugin(info) {
        // TODO: Make the placement smart.
        const newPlugin = new PluginButton(info.name, info.icon, this.meister);
        this.topRightWrapper.appendChild(newPlugin.getNode());
    }
}

export default TopBar;
