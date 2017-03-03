import BaseElement from '../BaseElement';

class QualityBitrateButton extends BaseElement {
    constructor(meister, config) {
        super(meister);

        this.config = config;
        this.element = document.createElement('div');

        this.classListAdd(this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        this.classListAdd(this.element, 'icon', 'icon_icHd');
        this.classListAdd(this.element, 'pf-ui-element-hidden');

        this.qualitySelector = document.createElement('div');
        this.classListAdd(this.qualitySelector, 'pf-quality-selector', 'hidden');

        this.meister.controlsWrapper.appendChild(this.qualitySelector);

        this.element.addEventListener('click', (e) => this.onClick(e));

        this.bitrates = null;
        this.on('itemBitrates', (info) => this.onItemBitrates(info));

        if (Array.isArray(this.config.qualityMapping)) {
            // ensure qualityMapping is an array
            this.qualityMappingMode = true;
            this.qualityMapping = this.config.qualityMapping;

            for (let i = 0; i < this.qualityMapping.length; i++) {
                // expand mapping items  with empty bitrates-array
                this.qualityMapping[i].bitrates = [];
                this.qualityMapping[i].index = i;
            }
        }

        // Store this eventfunction in the instance for easier removal.
        this.hide = () => {
            this.classListAdd(this.qualitySelector, 'hidden');
            document.body.removeEventListener('click', this.hide);
        };
    }

    onItemUnloaded() {
        // Clear any previous bitrates that were present.
        this.qualitySelector.innerHTML = '';
        this.bitrates = null;

        this.classListAdd(this.element, 'pf-ui-element-hidden');
    }

    onClick(e) {
        // TODO: Perhaps do this later?
        e.stopPropagation();

        // Show/hide menu when the button is clicked.
        if (!e.target.hasAttribute('index') && !e.target.mapping) {
            if (this.qualitySelector.classList.contains('hidden')) {
                this.show();
            } else {
                this.hide();
            }

            return;
        }

        // Element has attribute index, must be a bitrate option
        if (e.target.hasAttribute('index')) {
            const newBitrateIndex = parseInt(e.target.getAttribute('index'), 10);
            this.selectBitrate(newBitrateIndex);
        }

        if (e.target.mapping) {
            const newBitrateIndex = parseInt(e.target.mapping.bitrates[0].bitrateIndex, 10);
            this.selectResolution(newBitrateIndex);
        }

        this.hide();
    }

    show() {
        this.classListRemove(this.qualitySelector, 'hidden');
        document.body.addEventListener('click', this.hide);
    }

    onItemBitrates(info) {
        info.bitrates.sort((a, b) => b.bitrate - a.bitrate);
        this.bitrates = info.bitrates;
        this.classListRemove(this.element, 'pf-ui-element-hidden');

        if (this.qualityMappingMode) {
            this.prepareResolutionMapping();
            this.selectResolution(info.currentIndex, true);
        } else {
            this.prepareBitrates();
            this.selectBitrate(info.currentIndex, true);
        }
    }

    createOption(bitrate, index) {
        const qualityOption = document.createElement('div');
        qualityOption.classList.add('pf-quality-option');
        qualityOption.classList.add('pf-ui-element-active');

        // When no index is passed we're dealing with resolution mapping.
        if (index !== undefined) {
            this.prepareBitrateOption(qualityOption, bitrate, index);
        } else {
            this.prepareResolutionOption(qualityOption, bitrate);
        }

        qualityOption.selected = document.createElement('div');
        qualityOption.selected.classList.add('pf-quality-option-select');
        qualityOption.selected.classList.add('icon');
        // Check for mobile.
        if (this.isMobile) qualityOption.selected.classList.add('pf-mobile');
        qualityOption.appendChild(qualityOption.selected);

        this.qualitySelector.appendChild(qualityOption);

        qualityOption.addEventListener('click', (e) => this.onClick(e));

        return qualityOption;
    }

    prepareBitrates() {
        // TODO: No bitrate metadata provided
        for (let i = 0; i < this.bitrates.length; i++) {
            const bitrateInfo = this.bitrates[i];
            let bitrate = bitrateInfo.bitrate;

            // A bitrate of 0 means auto quality
            if (bitrate === 0) {
                bitrate = 'auto';
            }

            bitrateInfo.option = this.createOption(bitrate, bitrateInfo.index);
        }
    }

    prepareBitrateOption(element, bitrate, index) {
        const qualityOption = element;

        if (bitrate === 'auto') {
            qualityOption.textContent = bitrate;
        } else if (this.config.bitrateToResolution) {
            qualityOption.textContent = this.config.bitrateToResolution(bitrate);
        } else {
            qualityOption.textContent = this.meister.utils.bitrateToResolution(bitrate);
        }

        qualityOption.setAttribute('index', index);
    }

    selectBitrate(index, silent = false) {
        for (let i = 0; i < this.bitrates.length; i++) {
            const bitrate = this.bitrates[i];

            if (bitrate.index === index) {
                bitrate.option.selected.classList.add('icon_icCheck');

                // Do not notify player on initial select.
                if (!silent) {
                    this.meister.trigger('requestBitrate', {
                        bitrateIndex: index,
                    });
                }
            } else {
                bitrate.option.selected.classList.remove('icon_icCheck');
            }
        }
    }

    prepareResolutionMapping() {
        for (let i = 0; i < this.bitrates.length; i++) {
            const bitrateInfo = this.bitrates[i];
            this.setResolution(bitrateInfo.bitrate, bitrateInfo.index);
        }

        for (let i = 0; i < this.qualityMapping.length; i++) {
            const mapping = this.qualityMapping[i];

            if (mapping.bitrates.length < 1) {
                if (this.meister.config.debug) console.error('No bitrates available for this mapping', mapping);
            } else {
                mapping.option = this.createOption(mapping);
            }
        }
    }

    setResolution(bitrate, bitrateIndex) {
        for (let i = 0; i < this.qualityMapping.length; i++) {
            const mapping = this.qualityMapping[i];
            if (typeof mapping.from === 'undefined' || typeof mapping.to === 'undefined') {
                console.error('Qualitymapping is missing a to or from-value', mapping);
                break;
            } else if (bitrate > mapping.from && bitrate <= mapping.to) {
                this.qualityMapping[i].bitrates.push(
                    {
                        bitrate,
                        bitrateIndex,
                    });
                break;
            }
        }
    }

    prepareResolutionOption(element, mapping) {
        const qualityOption = element;

        if (!mapping.resolution) {
            console.error('Qualitymapping is missing a resolution-value', mapping);
        }

        qualityOption.textContent = mapping.resolution;
        qualityOption.mapping = mapping;
    }

    selectResolution(index, silent = false) {
        for (let i = 0; i < this.qualityMapping.length; i++) {
            const mapping = this.qualityMapping[i];
            if (mapping.option) {
                mapping.option.selected.classList.remove('icon_icCheck');
                mapping.bitrates.forEach((bitrate) => {
                    if (bitrate.bitrateIndex === index) {
                        mapping.option.selected.classList.add('icon_icCheck');

                        // Do not notify player on initial select.
                        if (!silent) {
                            this.meister.trigger('requestBitrate', {
                                bitrateIndex: index,
                            });
                        }
                    }
                });
            }
        }
    }
}

export default QualityBitrateButton;
