export function prepareBitrateOption(element, bitrate, index, transform) {
    const qualityOption = element;

    if (bitrate === 'auto') {
        qualityOption.textContent = bitrate;
    } else {
        qualityOption.textContent = transform(bitrate);
    }

    qualityOption.setAttribute('index', index);
}

export function selectBitrate(bitrates, index, silent) {
    bitrates.forEach((bitrate) => {
        if (bitrate.index === index) {
            bitrate.option.selected.classList.add('pf-icon_icCheck');
        } else {
            bitrate.option.selected.classList.remove('pf-icon_icCheck');
        }
    });

    return silent ? null : index;
}

/**
 * Checks if a given index exists in the bitrates list.
 *
 * @export
 * @param {Array.<{index: number, bitrate:number, option:HTMLElement}>} bitrates
 * @param {number} index
 * @returns {boolean}
 */
export function doesBitrateIndexExist(bitrates, index) {
    return !!bitrates.find(bitrate => bitrate.index === index);
}
