import TopBar from './top/TopBar';
import BottomBar from './bottom/BottomBar';
import CondensedBar from './CondensedBar';
import Preview from './over/Preview';
import AdControls from './AdControls';
import PluginSpace from './over/PluginSpace';
import Spinner from './over/Spinner';
import packageJson from '../../package.json';

let TIME_TILL_FADE = 3000;

class StandardUi extends Meister.Ui {

    static get KEY_SPACEBAR() { return 32; }
    static get KEY_MEDIAPLAYPAUSE() { return 179; }

    constructor(config, meister) {
        super(config, meister);

        if (Number.isFinite(this.config.timeToFade)) {
            TIME_TILL_FADE = this.config.timeToFade * 1000;
        }

        this.standardWrapper = document.createElement('div');
        this.meister.elementUtils.classListAdd(this.standardWrapper, 'pf-controls-wrapper');

        this.meister.config.playPauseOnScreenClick = this.meister.config.playPauseOnScreenClick === undefined ? true : this.meister.config.playPauseOnScreenClick;

        this.preview = new Preview(meister);
        this.spinner = new Spinner(meister);

        this.isLive = false;

        // Don't add this listener on mobile; makes controls annyoing to show
        if (!this.meister.browser.isMobile) {
            this.meister.on('itemTimeInfo', (timeInfo) => {
                this.isLive = timeInfo.isLive;
            });

            this.standardWrapper.addEventListener('click', () => {

                if (this.isLive && (this.config.disablePauseWithLive || this.meister.config.disablePauseWithLive)) {
                    // TODO: remove this.config.disablePauseWithLive in next release
                    if (Object.prototype.hasOwnProperty.call(this.config, 'disablePauseWithLive')) {
                        console.warn('Setting disablePauseWithLive will be moved to the global configuration in next release of MeisterPlayer.');
                    }
                    return;
                }

                if (!this.meister.config.playPauseOnScreenClick) {
                    return;
                }

                if (this.meister.playing) {
                    this.meister.pause(true);
                } else {
                    this.meister.play(true);
                }
            });
        }

        if (this.config.condensedUi) {
            this.bottomBar = new CondensedBar(config, meister);
        } else {
            this.topBar = new TopBar(config, meister);
            this.bottomBar = new BottomBar(config, meister);
        }

        this.adControls = new AdControls(meister, config);
        this.pluginSpace = new PluginSpace(meister, this);

        this.on('adBreakStarted', e => this.onAdBreakStarted(e));
        this.on(['adBreakEnded', 'itemUnloaded'], e => this.onAdBreakEnded(e));

        // Bind class methods to instance for easier event listener removal.
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.mouseTimeout = null;
        this.controlsTimeout = null;
        this.isControlsShown = false;

        this.fixedControls = !!this.config.fixedControls;
        this.toggleFixedControls(this.fixedControls);

        this.on('standard:toggleFixedControls', e => this.toggleFixedControls(e.fixed));
    }

    static get pluginName() {
        return 'StandardUi';
    }

    static get pluginVersion() {
        return packageJson.version;
    }

    toggleFixedControls(on) {
        if (on) {
            this.meister.container.removeEventListener('mousedown', this.onMouseDown);
            this.meister.container.removeEventListener('touchstart', this.onMouseDown);

            this.meister.container.removeEventListener('mousemove', this.onMouseMove);
            this.meister.container.removeEventListener('touchmove', this.onMouseMove);
            this.meister.container.removeEventListener('mouseleave', this.onMouseLeave);

            this.showControls();
            this.showCursor();
        } else {
            this.meister.container.addEventListener('mousedown', this.onMouseDown);
            this.meister.container.addEventListener('touchstart', this.onMouseDown);

            this.meister.container.addEventListener('mousemove', this.onMouseMove);
            this.meister.container.addEventListener('touchmove', this.onMouseMove);
            this.meister.container.addEventListener('mouseleave', this.onMouseLeave);

            // Start hide countdown.
            this.mouseTimeout = setTimeout(this.hideCursor.bind(this), TIME_TILL_FADE);
            this.controlsTimeout = setTimeout(this.hideControls.bind(this), TIME_TILL_FADE);
        }
    }

    onMouseDown() {
        this.dragging = true;
        window.addEventListener('mouseup', this.onMouseUp);
        window.addEventListener('touchend', this.onMouseUp);
    }

    onMouseUp() {
        this.dragging = false;
        // Fake mouse movement
        this.onMouseMove();

        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('touchend', this.onMouseUp);
    }

    onMouseMove() {
        clearTimeout(this.mouseTimeout);
        clearTimeout(this.controlsTimeout);

        this.showControls();
        this.showCursor();

        this.mouseTimeout = setTimeout(this.hideCursor.bind(this), TIME_TILL_FADE);
        this.controlsTimeout = setTimeout(this.hideControls.bind(this), TIME_TILL_FADE);
    }

    onMouseLeave() {
        clearTimeout(this.mouseTimeout);
        clearTimeout(this.controlsTimeout);

        this.hideControls();
        this.showCursor();
    }

    onAdBreakStarted() {
        this.meister.elementUtils.classListAdd(this.standardWrapper, 'pf-ui-element-hidden');
        this.meister.adWrapper.classList.remove('pf-ui-element-hidden');

        // iOS cannot handle visibility:hidden very well.
        // So we make an exception for that and use display instead on this element.
        if (this.meister.browser.isiOS) {
            this.meister.adWrapper.style.display = 'block';
        }

        this.adControls.show();
    }

    onAdBreakEnded() {
        this.meister.elementUtils.classListRemove(this.standardWrapper, 'pf-ui-element-hidden');
        this.meister.adWrapper.classList.add('pf-ui-element-hidden');

        // iOS cannot handle visibility:hidden very well.
        // So we make an exception for that and use display instead on this element.
        if (this.meister.browser.isiOS) {
            this.meister.adWrapper.style.display = 'none';
        }

        this.adControls.hide();
    }

    hideCursor() {
        if (this.dragging) {
            return;
        }

        this.meister.container.style.cursor = 'none';
    }

    showCursor() {
        this.meister.container.style.cursor = 'auto';
    }

    hideControls() {
        if (this.dragging || !this.meister.playing) {
            return;
        }

        this.bottomBar.getNode().classList.add('hidden');
        if (!this.config.condensedUi) { this.topBar.getNode().classList.add('hidden'); }
        this.bottomBar.hide();

        if (this.isControlsShown) {
            this.meister.trigger('uiEvent:hideControls', {});
        }

        this.isControlsShown = false;
    }

    showControls() {
        this.bottomBar.getNode().classList.remove('hidden');
        if (!this.config.condensedUi) { this.topBar.getNode().classList.remove('hidden'); }

        if (!this.isControlsShown) {
            this.meister.trigger('uiEvent:showControls', {});
        }

        this.isControlsShown = true;
    }

    draw() {
        this.standardWrapper.appendChild(this.preview.getNode());
        this.standardWrapper.appendChild(this.spinner.getNode());

        this.standardWrapper.appendChild(this.pluginSpace.getNode());
        if (!this.config.condensedUi) { this.standardWrapper.appendChild(this.topBar.getNode()); }
        this.standardWrapper.appendChild(this.bottomBar.getNode());
        this.meister.adWrapper.appendChild(this.adControls.getNode());

        this.controlsWrapper.appendChild(this.standardWrapper);

        // Insert other ui plugins
        this.meister.trigger('uiReady', {
            pluginSpace: this.pluginSpace.getNode(),
        });
    }

    destroy() {
        super.destroy();

        clearTimeout(this.mouseTimeout);
        clearTimeout(this.controlsTimeout);

        window.removeEventListener('mouseup', this.onMouseUp);
        window.removeEventListener('touchend', this.onMouseUp);
    }
}

Meister.registerPlugin(StandardUi.pluginName, StandardUi);

export default StandardUi;
