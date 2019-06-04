import BaseElement from '../BaseElement';

const DEFAULT_LIVE_THRESHOLD = 35;

class TimeDisplay extends BaseElement {
    constructor(meister, config) {
        super(meister);
        this.config = config;

        this.liveThreshold = this.config.liveThreshold || DEFAULT_LIVE_THRESHOLD;

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-time-display');
        // HACK: dirty microsoft
        if (this.meister.browser.isIE || this.meister.browser.isEdge) {
            this.classListAdd(this.element, 'microsoft-hack');
        }

        this.currentTime = document.createElement('span');
        this.currentTime.innerHTML = '0:00';
        this.classListAdd(this.currentTime, 'time-display-element');

        this.seperator = document.createElement('span');
        this.seperator.innerHTML = '/';
        this.classListAdd(this.seperator, 'time-display-element');

        this.duration = document.createElement('span');
        this.duration.innerHTML = '0:00';
        this.classListAdd(this.duration, 'time-display-element');
        this.duration.addEventListener('click', () => this.meister.trigger('requestGoLive'));

        this.element.appendChild(this.currentTime);
        this.element.appendChild(this.seperator);
        this.element.appendChild(this.duration);

        this.isLive = false;

        this.on('itemTimeInfo', (timeInfo) => { this.onItemTimeInfo(timeInfo); });
        this.on('playerTimeUpdate', (e) => { this.onTimeUpdate(e); });
        this.on('playerSeek', (e) => { this.onPlayerSeek(e); });

        // Ad variables.
        this.adTimer = null;
        this.adDuration = 0;
    }

    onItemUnloaded() {
        this.isLive = false;
        this.classListRemove(this.duration, 'go-live', 'pf-ui-element-active');

        this.currentTime.innerHTML = '0:00';
        this.duration.innerHTML = '0:00';
    }

    onItemTimeInfo(timeInfo) {
        if (timeInfo.isLive) {
            this.isLive = true;
            this.duration.innerHTML = 'LIVE';
        } else {
            this.duration.innerHTML = this.createTimeString(timeInfo.duration);
        }
    }

    onTimeUpdate(e) {
        // Set the duration and current time for VODs
        if (!this.isLive) {
            this.currentTime.innerHTML = this.createTimeString(e.currentTime);
            this.duration.innerHTML = this.createTimeString(e.duration);
            return;
        }

        // If a livestream is close enough to the edge display no time.
        const behindLive = e.duration - e.currentTime;

        if (behindLive < this.liveThreshold) {
            this.currentTime.innerHTML = '-';
            this.classListRemove(this.duration, 'go-live', 'pf-ui-element-active');
        } else {
            // Display the amount of time the player is behind live.
            const timeString = this.createTimeString(behindLive);
            this.currentTime.innerHTML = `-${timeString}`;

            // Activate the go live button.
            this.classListAdd(this.duration, 'go-live', 'pf-ui-element-active');
        }
    }

    onPlayerSeek(e) {
        if (this.isLive) {
            return;
        }

        // Set the duration and current time for VODs
        this.currentTime.innerHTML = this.createTimeString(e.currentTime);
        this.duration.innerHTML = this.createTimeString(e.duration);
    }

    createTimeString(time) {
        let roundTime = Math.round(time);
        if (roundTime < 0) {
            roundTime = 0;
        }

        return this.meister.utils.timeToHMS(roundTime);
    }
}

export default TimeDisplay;
