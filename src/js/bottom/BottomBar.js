import PlayButton from './PlayButton';
import StepBackButton from './StepBackButton';
import StepForwardButton from './StepForwardButton';
import PlaylistButtons from './PlaylistButtons';
import FullscreenButton from './FullscreenButton';
import TimeDisplay from './TimeDisplay';
import QualityButton from './QualityButton';
import LanguageButton from './LanguageButton';
import CaptionsButton from './CaptionsButton';
import SeekBar from './SeekBar';
import VolumeSlider from './VolumeSlider';
import BaseElement from '../BaseElement';
import { STORAGE_BITRATE_INDEX_NAME } from '../Constants';

class BottomBar extends BaseElement {
    constructor(config, meister) {
        super(meister);

        this.config = config;

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-control-bar', 'bottom');

        // Construct the bottom left half
        this.bottomLeftWrapper = document.createElement('div');
        this.classListAdd(this.bottomLeftWrapper, 'pf-ui-wrapper-left');

        // step back button:
        if (this.config.stepBack) {
            this.stepBackButton = new StepBackButton(meister, config);
            this.bottomLeftWrapper.appendChild(this.stepBackButton.getNode());
        }

        this.playButton = new PlayButton(meister, config);
        this.bottomLeftWrapper.appendChild(this.playButton.getNode());

        if (this.config.stepForward) {
            this.stepForwardButton = new StepForwardButton(meister, config);
            this.bottomLeftWrapper.appendChild(this.stepForwardButton.getNode());
        }

        this.playlistButton = new PlaylistButtons(meister);
        this.bottomLeftWrapper.appendChild(this.playlistButton.getNode());

        this.volumeSlider = new VolumeSlider(meister);
        this.bottomLeftWrapper.appendChild(this.volumeSlider.getNode());

        this.timeDisplay = new TimeDisplay(meister, config);
        this.bottomLeftWrapper.appendChild(this.timeDisplay.getNode());


        // Append to wrapper
        this.element.appendChild(this.bottomLeftWrapper);

        // Construct and append the top wrapper
        this.seekBar = new SeekBar(meister);
        this.element.appendChild(this.seekBar.getNode());

        // Construct the bottom right half
        this.bottomRightWrapper = document.createElement('div');
        this.classListAdd(this.bottomRightWrapper, 'pf-ui-wrapper-right');

        this.fullscreenButton = new FullscreenButton(meister);
        this.bottomRightWrapper.appendChild(this.fullscreenButton.getNode());

        if (!this.config.qualityButton || !this.config.qualityButton.hide) {
            this.qualityButton = new QualityButton(meister, this.config);
            this.bottomRightWrapper.appendChild(this.qualityButton.getNode());
        } else {
            localStorage.removeItem(STORAGE_BITRATE_INDEX_NAME);
        }

        this.langButton = new LanguageButton(meister);
        this.bottomRightWrapper.appendChild(this.langButton.getNode());

        this.ccButton = new CaptionsButton(meister);
        this.bottomRightWrapper.appendChild(this.ccButton.getNode());

        // Append to wrapper
        this.element.appendChild(this.bottomRightWrapper);

        // Hide/show on plugin overlay
        this.on('uiPluginOpen', () => this.onPluginOpen());
        this.on('uiPluginClose', () => this.onPluginClose());

        // Clicks inside the control bars shouldn't play/pause the player.
        this.element.addEventListener('click', this.stopPointerPropagation.bind(this));

        // Double clicks/taps inside the controls shouldn't trigger fullscreen.
        this.element.addEventListener('dblclick', this.stopPointerPropagation.bind(this));
        this.element.addEventListener('touchstart', this.stopPointerPropagation.bind(this));
    }

    stopPointerPropagation(e) {
        const pointerEvent = e || event;
        pointerEvent.stopPropagation();
    }

    hide() {
        if (this.qualityButton) {
            this.qualityButton.hide();
        }
    }

    onPluginOpen() {
        this.classListAdd(this.element, 'pf-ui-overlay-active');
    }

    onPluginClose() {
        this.classListRemove(this.element, 'pf-ui-overlay-active');
    }
}

export default BottomBar;
