import BaseElement from '../BaseElement';

class Preview extends BaseElement {
    constructor(meister) {
        super(meister);

        this.element = document.createElement('div');
        this.classListAdd(this.element, 'pf-preview');

        this.info = document.createElement('div');
        this.classListAdd(this.info, 'pf-preview-info');

        this.infoTitle = document.createElement('span');
        this.info.appendChild(this.infoTitle);
        this.infoDescription = document.createElement('span');
        this.info.appendChild(this.infoDescription);

        this.playButton = document.createElement('div');

        // HACK: The first time itemUnloaded is always called.
        // This prevents the preview from showing correctly.
        this.isLoaded = false;

        this.itemHasLoaded = false;

        this.classListAdd(this.playButton,
            'pf-preview-play-button', 'pf-ui-element-active', 'pf-ui-element-hidden');
        this.classListAdd(this.playButton, 'pf-icon', 'pf-icon_icPlay');

        this.element.appendChild(this.info);
        this.element.appendChild(this.playButton);

        this.one('playlistMetadata', item => this.onPlaylistMetadata(item));

        this.on('uiEvent', (e) => {
            if (e.type === 'splash') {
                this.classListRemove(this.element, 'pf-ui-element-hidden');

                if (!e.info) return;

                if (e.info.thumbnailURL) {
                    this.element.style['background-image'] = `url(${e.info.thumbnailURL})`;
                }

                if (e.info.title) {
                    this.infoTitle.innerHTML = `${e.info.title}<br><br>`;
                }

                if (e.info.description) {
                    this.infoDescription.textContent = e.info.description;
                }
            }
        });

        this.on('itemLoaded', () => {
            this.itemHasLoaded = true;
            this.classListRemove(this.playButton, 'pf-ui-element-hidden');
        });

        this.element.addEventListener('click', (e) => {
            const clickEvent = e || event;
            clickEvent.stopPropagation();

            if (!this.itemHasLoaded) {
                return;
            }

            this.classListAdd(this.element, 'pf-ui-element-hidden');
            this.meister.play(true);
        });

        this.on('playerPlay', () => {
            this.itemHasLoaded = true;
            this.classListAdd(this.element, 'pf-ui-element-hidden');
        });
    }

    /**
     * Makes sure that the play button is only shown when it's possible to play.
     *
     * @param {any} currentItem
     * @memberof Preview
     */
    onPlaylistMetadata(currentItem) {
        let isAdItem = false;

        if (currentItem.parallel) {
            // Make sure we got a item that supports vmap in the parallel items.
            isAdItem = !!currentItem.parallel.find(parallelItem => parallelItem.type === 'vmap');
        } else if (currentItem.type === 'aditem') {
            // Items that simply have the aditem as type are also an ad item..
            isAdItem = true;
        }

        // With ad items we first want to make sure we can actually load ads before showing a play button
        if (isAdItem) {
            // Ad blockers should not be the reason to not show the play button.
            this.one('adBlockerDetected', () => this.classListRemove(this.playButton, 'pf-ui-element-hidden'));
            this.one('adCuePoints', () => this.classListRemove(this.playButton, 'pf-ui-element-hidden'));
        } else {
            this.one('itemLoaded', () => this.classListRemove(this.playButton, 'pf-ui-element-hidden'));
        }
    }

    onItemUnloaded() {
        if (!this.isLoaded) {
            this.isLoaded = true;
            return;
        }

        this.itemHasLoaded = false;
        this.one('playlistMetadata', item => this.onPlaylistMetadata(item));

        this.element.style['background-image'] = '';
        this.infoTitle.innerHTML = '';
        this.infoDescription.textContent = '';
    }
}

export default Preview;
