import PlayButton from './bottom/PlayButton';
import StepBackButton from './bottom/StepBackButton';
import StepForwardButton from './bottom/StepForwardButton';
import PlaylistButtons from './bottom/PlaylistButtons';
import TimeDisplay from './bottom/TimeDisplay';
import QualityButton from './bottom/QualityButton';
import SeekBar from './bottom/SeekBar';
import VolumeSlider from './bottom/VolumeSlider';
import CastButton from './top/CastButton';
import BaseElement from './BaseElement';

class CondensedBar extends BaseElement {
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

        this.timeDisplay = new TimeDisplay(meister);
        this.bottomLeftWrapper.appendChild(this.timeDisplay.getNode());


        // Append to wrapper
        this.element.appendChild(this.bottomLeftWrapper);

        // Construct and append the top wrapper
        this.seekBar = new SeekBar(meister);
        this.element.appendChild(this.seekBar.getNode());

        // Construct the bottom right half
        this.bottomRightWrapper = document.createElement('div');
        this.classListAdd(this.bottomRightWrapper, 'pf-ui-wrapper-right');

        if (!this.config.castButton || !this.config.castButton.hide) {
            this.castButton = new CastButton(meister);
            this.bottomRightWrapper.appendChild(this.castButton.getNode());
        }

        if (!this.config.qualityButton || !this.config.qualityButton.hide) {
            this.qualityButton = new QualityButton(meister, this.config);
            this.bottomRightWrapper.appendChild(this.qualityButton.getNode());
        }

        // Append to wrapper
        this.element.appendChild(this.bottomRightWrapper);

        // Hide/show on plugin overlay
        this.on('uiPluginOpen', () => this.onPluginOpen());
        this.on('uiPluginClose', () => this.onPluginClose());

        // Clicks inside the control bars shouldn't play/pause the player.
        this.element.addEventListener('click', (e) => {
            const clickEvent = e || event;
            clickEvent.stopPropagation();
        });
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

export default CondensedBar;
