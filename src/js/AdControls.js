import BaseElement from './BaseElement';
import PlayButton from './ad/PlayButton';
import FullscreenButton from './bottom/FullscreenButton';
import VolumeSlider from './bottom/VolumeSlider';

class AdControls extends BaseElement {
    constructor(meister, config) {
        super(meister);

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-ad-controls-wrapper');
        this.classListAdd(this.element, 'pf-ui-element-hidden');

        this.adControls = document.createElement('div');
        this.classListAdd(this.adControls, 'pf-ad-controls');
        this.element.appendChild(this.adControls);

        // Progress bar adding
        this.progressBar = document.createElement('div');
        this.classListAdd(this.progressBar, 'pf-ad-progress-bar-fill');
        this.progressBar.style.transform = 'scaleX(0)';
        this.adControls.appendChild(this.progressBar);

        this.adInfoView = document.createElement('div');
        this.classListAdd(this.adInfoView, 'pf-ad-info-view');
        this.adControls.appendChild(this.adInfoView);

        // The real controls (play/pause)
        this.extraAdControlsWrapper = document.createElement('div');
        this.classListAdd(this.extraAdControlsWrapper, 'pf-extra-ad-controls');
        this.classListAdd(this.extraAdControlsWrapper, 'pf-ui-element-hidden');
        this.element.appendChild(this.extraAdControlsWrapper);

        // Add the controls to the wrapper
        this.adPlayButton = new PlayButton(meister, config, 'ad');
        this.extraAdControlsWrapper.appendChild(this.adPlayButton.getNode());

        this.fullscreenButton = new FullscreenButton(meister);
        this.classListAdd(this.fullscreenButton.getNode(), 'pf-ad-fullscreen');
        this.classListRemove(this.fullscreenButton.getNode(), 'pf-mobile');
        this.extraAdControlsWrapper.appendChild(this.fullscreenButton.getNode());

        this.volumeSlider = new VolumeSlider(meister);
        this.classListRemove(this.volumeSlider.getNode(), 'pf-mobile');
        this.extraAdControlsWrapper.appendChild(this.volumeSlider.getNode());

        // advertisement count
        this.adCount = document.createElement('div');
        this.classListAdd(this.adCount, 'pf-ad-count');
        this.adCount.textContent = ' ';
        this.adInfoView.appendChild(this.adCount);

        this.adCountDown = document.createElement('div');
        this.classListAdd(this.adCountDown, 'pf-ad-countdown');
        this.adCountDown.textContent = ' ';
        this.adInfoView.appendChild(this.adCountDown);

        this.meister.container.addEventListener('mousemove', () => {
            // HACK: Need to make actual touch-friendly ad controls.
            if (this.meister.browser.isMobile) {
                return;
            }

            this.adControls.classList.add('pf-ad-controls-move-up');
            this.adControls.classList.remove('pf-ad-controls-move-down');

            this.extraAdControlsWrapper.classList.remove('pf-ui-element-hidden');
            this.extraAdControlsWrapper.classList.add('pf-ad-controls-shown-animation');
            this.extraAdControlsWrapper.classList.remove('pf-ad-controls-hide-animation');
        });

        this.meister.container.addEventListener('mouseleave', () => {
            this.adControls.style.display = 'block';

            this.adControls.classList.remove('pf-ad-controls-move-up');
            this.adControls.classList.add('pf-ad-controls-move-down');

            this.extraAdControlsWrapper.classList.remove('pf-ad-controls-shown-animation');
            this.extraAdControlsWrapper.classList.add('pf-ad-controls-hide-animation');
        });

        this.on('adStarted', (info) => {
            const ad = info.adsManager.getCurrentAd();
            if (ad) {
                const adPodInfo = ad.getAdPodInfo();

                this.adCount.textContent = `Ad ${adPodInfo.getAdPosition()} of ${adPodInfo.getTotalAds()}`;
                const adDuration = this.meister.utils.timeToHMS(Math.round(ad.getDuration()));
                this.adCountDown.textContent = `(${adDuration})`;
            } else {
                // TODO: this should be changed. We need to throw an error and have the vast-object handle it accordingly.
                this.meister.enable('requestPlay');
                this.meister.enable('requestPause');
            }
        });

        this.on('adTimeupdate', (info) => {
            const normalizedProgress = info.currentTime / info.duration;
            this.progressBar.style.transform = `scaleX(${normalizedProgress})`;

            const timeLeft = Math.round(info.duration - info.currentTime);
            const timeLeftString = this.meister.utils.timeToHMS(timeLeft);
            this.adCountDown.textContent = `(${timeLeftString})`;
        });

        this.on('adEnded', () => {
            this.progressBar.style.transform = 'scaleX(0)';
            this.adCountDown.textContent = ' ';
        });
    }

    show() {
        this.classListRemove(this.element, 'pf-ui-element-hidden');
        this.meister.muted = this.meister.config.startMuted;
        this.meister.trigger('playerVolumeChange');
        this.adPlayButton.toggleIcon(true);
    }

    hide() {
        this.classListAdd(this.element, 'pf-ui-element-hidden');
        // Reset the progress bar.
        this.progressBar.style.transform = 'scaleX(0)';
        this.adCount.textContent = ' ';
        this.adCountDown.textContent = ' ';
    }
}

export default AdControls;
