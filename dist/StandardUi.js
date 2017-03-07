module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ElementUtils = __webpack_require__(32);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = function () {
    function BaseElement(meister) {
        var _this = this;

        _classCallCheck(this, BaseElement);

        this.meister = meister;
        this.isMobile = this.meister.browser.isMobile;

        this.element = null;

        this.eventStore = [];

        if (this.onItemUnloaded) {
            this.on('itemUnloaded', function (e) {
                return _this.onItemUnloaded(e);
            });
        }
    }

    _createClass(BaseElement, [{
        key: 'on',
        value: function on(hook, handler) {
            var _eventStore;

            (_eventStore = this.eventStore).push.apply(_eventStore, _toConsumableArray(this.meister.on(hook, handler, this.constructor.name)));
        }
    }, {
        key: 'one',
        value: function one(hook, block, handler) {
            var _eventStore2;

            (_eventStore2 = this.eventStore).push.apply(_eventStore2, _toConsumableArray(this.meister.one(hook, block, handler, this.constructor.name)));
        }
    }, {
        key: 'classListAdd',
        value: function classListAdd() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (this.isMobile) args.push('pf-mobile');
            _ElementUtils.classListAdd.apply(undefined, args);
        }
    }, {
        key: 'classListRemove',
        value: function classListRemove() {
            _ElementUtils.classListRemove.apply(undefined, arguments);
        }
    }, {
        key: 'getNode',
        value: function getNode() {
            return this.element;
        }
    }]);

    return BaseElement;
}();

exports.default = BaseElement;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VolumeSlider = function (_BaseElement) {
    _inherits(VolumeSlider, _BaseElement);

    function VolumeSlider(meister) {
        _classCallCheck(this, VolumeSlider);

        var _this = _possibleConstructorReturn(this, (VolumeSlider.__proto__ || Object.getPrototypeOf(VolumeSlider)).call(this, meister));

        _this.isDragging = false;
        _this.mousedownX = 0;
        _this.pagedownX = 0;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left');
        // Can't control volume on iOS when it's not playing inline
        if (_this.meister.browser.isiOS && !_this.meister.config.iosPlaysInline) {
            _this.classListAdd(_this.element, 'pf-ui-element-inactive');
        } else {
            _this.classListAdd(_this.element, 'pf-ui-element-active');
        }

        _this.volumeButton = document.createElement('div');
        _this.classListAdd(_this.volumeButton, 'pf-volume-button');
        _this.classListAdd(_this.volumeButton, 'icon', 'icon_icVol0');
        _this.element.appendChild(_this.volumeButton);

        _this.sliderWrapper = document.createElement('div');
        _this.classListAdd(_this.sliderWrapper, 'pf-volume-slider-wrapper');
        _this.element.appendChild(_this.sliderWrapper);

        _this.volumeBar = document.createElement('div');
        _this.classListAdd(_this.volumeBar, 'pf-volume-slider', 'close');
        _this.sliderWrapper.appendChild(_this.volumeBar);

        _this.volumeBarFill = document.createElement('div');
        _this.classListAdd(_this.volumeBarFill, 'pf-volume-slider-fill');
        _this.volumeBar.appendChild(_this.volumeBarFill);

        _this.volumeBarFigure = document.createElement('div');
        _this.classListAdd(_this.volumeBarFigure, 'pf-volume-slider-figure');
        _this.volumeBar.appendChild(_this.volumeBarFigure);

        // Add volume event listeners.
        _this.on('playerVolumeChange', function () {
            return _this.onVolumeChange();
        });
        _this.on('playerLoadedMetadata', function () {
            return _this.onVolumeChange();
        });

        // Add mouse event listeners
        _this.volumeButton.addEventListener('click', function () {
            return _this.onClick();
        });

        _this.element.addEventListener('mouseover', function () {
            return _this.showSlider(true);
        });
        _this.element.addEventListener('mouseleave', function () {
            return _this.showSlider(false);
        });

        _this.sliderWrapper.addEventListener('mousedown', function (e) {
            return _this.onDown(e);
        });
        _this.sliderWrapper.addEventListener('touchstart', function (e) {
            return _this.onDown(e);
        });

        _this.onMove = function (e) {
            if (_this.isDragging) {
                _this.updateBar(e);
            }
        };

        _this.onUp = function (e) {
            if (_this.isDragging) {
                _this.isDragging = false;

                if (e.target !== _this.sliderWrapper) {
                    _this.showSlider(false);
                }

                document.removeEventListener('mousemove', _this.onMove);
                document.removeEventListener('mouseup', _this.onUp);

                document.addEventListener('touchmove', _this.onMove);
                document.addEventListener('touchend', _this.onUp);
            }
        };
        return _this;
    }

    _createClass(VolumeSlider, [{
        key: 'onDown',
        value: function onDown(e) {
            // Prevents user from selecting the page.
            e.preventDefault();

            this.isDragging = true;

            if (window.TouchEvent && e instanceof window.TouchEvent) {
                this.pagedownX = e.touches[0].pageX;
                var rect = e.target.getBoundingClientRect();
                this.mousedownX = this.pagedownX - rect.left;
            } else {
                this.mousedownX = e.offsetX;
                this.pagedownX = e.pageX;
            }

            this.updateBar(e);

            document.addEventListener('mousemove', this.onMove);
            document.addEventListener('mouseup', this.onUp);

            document.addEventListener('touchmove', this.onMove);
            document.addEventListener('touchend', this.onUp);
        }
    }, {
        key: 'showSlider',
        value: function showSlider(on) {
            if (this.isDragging) {
                return;
            }

            if (on) {
                this.classListAdd(this.volumeBar, 'open');
                this.classListRemove(this.volumeBar, 'close');
            } else {
                this.classListRemove(this.volumeBar, 'open');
                this.classListAdd(this.volumeBar, 'close');
            }
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            this.meister.muted = !this.meister.muted;
            this.meister.trigger('playerVolumeChange');
        }
    }, {
        key: 'onVolumeChange',
        value: function onVolumeChange() {
            var normalizedProgress = this.meister.volume;

            if (this.meister.muted) {
                normalizedProgress = 0;
            }

            this.volumeBarFill.style.transform = 'scaleX(' + normalizedProgress + ')';
            var leftPercentage = 100 * normalizedProgress;
            this.volumeBarFigure.style.left = leftPercentage + '%';

            this.updateIcon();
        }
    }, {
        key: 'updateBar',
        value: function updateBar(e) {
            // Stop muting when the user changes the volume.
            this.meister.muted = false;

            var volume = this.normalizeEventPosition(e);

            if (volume > 1) {
                volume = 1;
            } else if (volume < 0) {
                volume = 0;
            }

            this.meister.volume = volume;
        }
    }, {
        key: 'clearIcons',
        value: function clearIcons() {
            for (var i = 0; i <= 3; i++) {
                this.classListRemove(this.volumeButton, 'icon_icVol' + i);
            }
        }
    }, {
        key: 'updateIcon',
        value: function updateIcon() {
            this.clearIcons();

            var volume = this.meister.volume;
            var iconNum = 0;

            if (this.meister.muted) {
                iconNum = 0;
            } else if (volume <= 0.25 && volume >= 0.01) {
                iconNum = 1;
            } else if (volume >= 0.25 && volume <= 0.66) {
                iconNum = 2;
            } else if (volume >= 0.66 && volume <= 1) {
                iconNum = 3;
            }

            this.classListAdd(this.volumeButton, 'icon_icVol' + iconNum);
        }
    }, {
        key: 'normalizeEventPosition',
        value: function normalizeEventPosition(e) {
            var pageX = 0;
            if (window.TouchEvent && e instanceof window.TouchEvent) {
                pageX = e.touches[e.touches.length - 1].pageX;
            } else {
                pageX = e.pageX;
            }

            var position = pageX;
            position = this.mousedownX + (pageX - this.pagedownX);

            var normalizedProgress = position / this.volumeBar.offsetWidth;

            // Stay within the boundaries
            if (normalizedProgress > 1.0) {
                normalizedProgress = 1.0;
            } else if (normalizedProgress < 0) {
                normalizedProgress = 0;
            }

            return normalizedProgress;
        }
    }]);

    return VolumeSlider;
}(_BaseElement3.default);

exports.default = VolumeSlider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FullscreenButton = function (_BaseElement) {
    _inherits(FullscreenButton, _BaseElement);

    function FullscreenButton(meister) {
        _classCallCheck(this, FullscreenButton);

        var _this = _possibleConstructorReturn(this, (FullscreenButton.__proto__ || Object.getPrototypeOf(FullscreenButton)).call(this, meister));

        _this.element = document.createElement('div');

        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right');
        if (_this.meister.config.audioOnly) {
            _this.classListAdd(_this.element, 'pf-ui-element-inactive');
        } else {
            _this.classListAdd(_this.element, 'pf-ui-element-active');
        }

        _this.classListAdd(_this.element, 'icon', 'icon_icFullscreen');

        _this.element.addEventListener('click', function () {
            return _this.toggleFullscreen();
        });

        _this.on('playerFullscreen', function () {
            return _this.toggleIcon();
        });
        return _this;
    }

    _createClass(FullscreenButton, [{
        key: 'toggleIcon',
        value: function toggleIcon() {
            var fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;

            if (fullscreenElement) {
                this.classListAdd(this.element, 'icon_icFullscreenExit');
                this.classListRemove(this.element, 'icon_icFullscreen');
            } else {
                this.classListAdd(this.element, 'icon_icFullscreen');
                this.classListRemove(this.element, 'icon_icFullscreenExit');
            }
        }
    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            if (this.meister.isFullscreen) {
                this.meister.cancelFullscreen();
            } else {
                this.meister.requestFullscreen();
            }
        }
    }]);

    return FullscreenButton;
}(_BaseElement3.default);

exports.default = FullscreenButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayButton = function (_BaseElement) {
    _inherits(PlayButton, _BaseElement);

    function PlayButton(meister, config) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';

        _classCallCheck(this, PlayButton);

        var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, meister));

        _this.config = config;
        _this.type = type;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-element-active');

        _this.isLive = false;

        // Default
        _this.classListAdd(_this.element, 'icon');
        _this.classListAdd(_this.element, 'icon_icPlay');

        // Register event listeners
        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });

        _this.on('itemTimeInfo', function (timeInfo) {
            return _this.onItemTimeInfo(timeInfo);
        });
        _this.on('playerPlay', function () {
            return _this.toggleIcon();
        });
        _this.on('playerPause', function () {
            return _this.toggleIcon();
        });
        _this.on('itemLoaded', function () {
            return _this.toggleIcon();
        });
        return _this;
    }

    _createClass(PlayButton, [{
        key: 'onItemTimeInfo',
        value: function onItemTimeInfo(timeInfo) {
            this.isLive = timeInfo.isLive;

            if (this.isLive && this.config.disablePauseWithLive && this.meister.playing && this.type === 'normal') {
                this.toggleIcon();
            }
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            if (this.meister.playing) {
                this.meister.pause(true);
            } else {
                this.meister.play(true);
            }
        }
    }, {
        key: 'toggleIcon',
        value: function toggleIcon() {
            if (this.isLive && this.config.disablePauseWithLive && this.meister.playing && this.type === 'normal') {
                this.classListRemove(this.element, 'icon_icPlay');
                this.classListRemove(this.element, 'icon_icPause');
                return;
            }

            if (this.meister.playing) {
                this.classListAdd(this.element, 'icon_icPause');
                this.classListRemove(this.element, 'icon_icPlay');
            } else {
                this.classListRemove(this.element, 'icon_icPause');
                this.classListAdd(this.element, 'icon_icPlay');
            }
        }
    }]);

    return PlayButton;
}(_BaseElement3.default);

exports.default = PlayButton;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlaylistButtons = function (_BaseElement) {
    _inherits(PlaylistButtons, _BaseElement);

    function PlaylistButtons(meister) {
        _classCallCheck(this, PlaylistButtons);

        var _this = _possibleConstructorReturn(this, (PlaylistButtons.__proto__ || Object.getPrototypeOf(PlaylistButtons)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-wrapper-left');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.prevButton = document.createElement('div');
        _this.classListAdd(_this.prevButton, 'pf-ui-element');
        _this.classListAdd(_this.prevButton, 'icon', 'icon_icPrev');

        _this.nextButton = document.createElement('div');
        _this.classListAdd(_this.nextButton, 'pf-ui-element');
        _this.classListAdd(_this.nextButton, 'icon', 'icon_icNext');

        _this.prevButton.addEventListener('click', function () {
            return _this.meister.trigger('playlistPrevious');
        });
        _this.nextButton.addEventListener('click', function () {
            return _this.meister.trigger('playlistNext');
        });

        _this.element.appendChild(_this.prevButton);
        _this.element.appendChild(_this.nextButton);

        _this.on('playlistInfo', function (playlistInfo) {
            return _this.onPlaylistInfo(playlistInfo);
        });
        return _this;
    }

    _createClass(PlaylistButtons, [{
        key: 'onPlaylistInfo',
        value: function onPlaylistInfo(playlistInfo) {
            // Reset the styles on the buttons.
            this.classListRemove(this.prevButton, 'pf-ui-element-inactive');
            this.classListRemove(this.nextButton, 'pf-ui-element-inactive');

            // Don't show playlist controls when there is no playlist.
            if (playlistInfo.length <= 1) {
                this.classListAdd(this.element, 'pf-ui-element-hidden');
                return;
            }

            // It's the first item, so can't go back.
            if (playlistInfo.currentIndex === 0) {
                this.classListAdd(this.prevButton, 'pf-ui-element-inactive');
                this.classListAdd(this.nextButton, 'pf-ui-element-active');
            }

            // It's the last item, so can't skip to the next item.
            if (playlistInfo.currentIndex >= playlistInfo.length - 1) {
                this.classListAdd(this.prevButton, 'pf-ui-element-active');
                this.classListAdd(this.nextButton, 'pf-ui-element-inactive');
            }

            // Show the playlist buttons.
            this.classListRemove(this.element, 'pf-ui-element-hidden');
        }
    }]);

    return PlaylistButtons;
}(_BaseElement3.default);

exports.default = PlaylistButtons;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

var _bitrate = __webpack_require__(23);

var _resolution = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RESOLUTION = 0;
var BITRATE = 1;

var QualityButton = function (_BaseElement) {
    _inherits(QualityButton, _BaseElement);

    function QualityButton(meister, config) {
        _classCallCheck(this, QualityButton);

        var _this = _possibleConstructorReturn(this, (QualityButton.__proto__ || Object.getPrototypeOf(QualityButton)).call(this, meister));

        _this.config = config;
        _this.element = document.createElement('div');

        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        _this.classListAdd(_this.element, 'icon', 'icon_icHd');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.qualitySelector = document.createElement('div');
        _this.classListAdd(_this.qualitySelector, 'pf-quality-selector', 'hidden');

        _this.meister.controlsWrapper.appendChild(_this.qualitySelector);

        _this.element.addEventListener('click', function (e) {
            return _this.onClick(e);
        });

        _this.bitrates = null;
        _this.on('itemBitrates', function (info) {
            return _this.onItemBitrates(info);
        });

        if (Array.isArray(_this.config.qualityMapping)) {
            _this.qualityMappingMode = true;
            _this.qualityMapping = _this.config.qualityMapping.map(_resolution.expandQualityMapping);
        }

        // Store this eventfunction in the instance for easier removal.
        _this.hide = function () {
            _this.classListAdd(_this.qualitySelector, 'hidden');
            document.body.removeEventListener('click', _this.hide);
        };
        return _this;
    }

    _createClass(QualityButton, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            // Clear any previous bitrates that were present.
            this.qualitySelector.innerHTML = '';
            this.bitrates = null;

            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
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
                var newBitrateIndex = parseInt(e.target.getAttribute('index'), 10);
                this.selectOption(newBitrateIndex);
            }

            if (e.target.mapping) {
                var _newBitrateIndex = parseInt(e.target.mapping.bitrates[0].bitrateIndex, 10);
                this.selectOption(_newBitrateIndex);
            }

            this.hide();
        }
    }, {
        key: 'show',
        value: function show() {
            this.classListRemove(this.qualitySelector, 'hidden');
            document.body.addEventListener('click', this.hide);
        }
    }, {
        key: 'onItemBitrates',
        value: function onItemBitrates(info) {
            var _this2 = this;

            info.bitrates.sort(function (a, b) {
                return b.bitrate - a.bitrate;
            });
            this.bitrates = info.bitrates;
            this.classListRemove(this.element, 'pf-ui-element-hidden');

            if (this.qualityMappingMode) {
                this.bitrates = (0, _resolution.prepareResolutionMapping)(this.bitrates, this.qualityMapping);
                this.qualityMapping.forEach(function (mapping) {
                    if (mapping.bitrates.length < 1) {
                        if (_this2.meister.config.debug) console.error('No bitrates available for this mapping', mapping);
                    } else {
                        // eslint-disable-next-line
                        mapping.option = _this2.createOption({
                            type: RESOLUTION,
                            mapping: mapping
                        });
                    }
                });
            } else {
                this.bitrates.forEach(function (bitrateInfo) {
                    // A bitrate of 0 means auto quality.
                    var bitrate = bitrateInfo.bitrate === 0 ? 'auto' : bitrateInfo.bitrate;
                    // eslint-disable-next-line
                    bitrateInfo.option = _this2.createOption({
                        type: BITRATE,
                        bitrate: bitrate,
                        index: bitrateInfo.index
                    });
                });
            }
            this.selectOption(info.currentIndex, true);
        }
    }, {
        key: 'createOption',
        value: function createOption(optionOpts) {
            var _this3 = this;

            var qualityOption = document.createElement('div');
            qualityOption.classList.add('pf-quality-option');
            qualityOption.classList.add('pf-ui-element-active');

            // When no index is passed we're dealing with resolution mapping.
            if (optionOpts.type === BITRATE) {
                var transform = this.config.bitrateToResolution ? this.config.bitrateToResolution : this.meister.utils.bitrateToResolution;

                (0, _bitrate.prepareBitrateOption)(qualityOption, optionOpts.bitrate, optionOpts.index, transform);
            } else if (optionOpts.type === RESOLUTION) {
                (0, _resolution.prepareResolutionOption)(qualityOption, optionOpts.mapping);
            }

            qualityOption.selected = document.createElement('div');
            qualityOption.selected.classList.add('pf-quality-option-select');
            qualityOption.selected.classList.add('icon');
            // Check for mobile.
            if (this.isMobile) qualityOption.selected.classList.add('pf-mobile');
            qualityOption.appendChild(qualityOption.selected);

            this.qualitySelector.appendChild(qualityOption);

            qualityOption.addEventListener('click', function (e) {
                return _this3.onClick(e);
            });

            return qualityOption;
        }
    }, {
        key: 'selectOption',
        value: function selectOption(index) {
            var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var bitrateIndex = null;

            if (this.qualityMappingMode) {
                bitrateIndex = (0, _resolution.selectResolution)(this.qualityMapping, index, silent);
            } else {
                bitrateIndex = (0, _bitrate.selectBitrate)(this.bitrates, index, silent);
            }

            if (Number.isFinite(bitrateIndex)) {
                this.meister.trigger('requestBitrate', {
                    bitrateIndex: bitrateIndex
                });
            }
        }
    }]);

    return QualityButton;
}(_BaseElement3.default);

exports.default = QualityButton;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

var _SeekBarPreview = __webpack_require__(25);

var _SeekBarPreview2 = _interopRequireDefault(_SeekBarPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function updateBar(element, percentage) {
    element.style.webkitTransform = 'scaleX(' + percentage + ')'; //eslint-disable-line
    element.style.transform = 'scaleX(' + percentage + ')'; //eslint-disable-line
}

var SeekBar = function (_BaseElement) {
    _inherits(SeekBar, _BaseElement);

    function SeekBar(meister) {
        _classCallCheck(this, SeekBar);

        var _this = _possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, meister));

        _this.isDragging = false;

        _this.loadedMetadata = false;

        _this.mousedownX = 0;
        _this.pagedownX = 0;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-seek-bar-wrapper');

        _this.seekBarPadding = document.createElement('div');
        _this.classListAdd(_this.seekBarPadding, 'pf-seek-bar-padding');
        _this.element.appendChild(_this.seekBarPadding);

        _this.seekBarDuration = document.createElement('div');
        _this.classListAdd(_this.seekBarDuration, 'pf-seek-bar', 'duration');
        _this.element.appendChild(_this.seekBarDuration);

        _this.seekBarBuffered = document.createElement('div');
        _this.classListAdd(_this.seekBarBuffered, 'pf-seek-bar', 'buffered');
        _this.element.appendChild(_this.seekBarBuffered);
        _this.seekBarBuffered.style.transform = 'scaleX(0)';

        _this.seekBarFill = document.createElement('div');
        _this.classListAdd(_this.seekBarFill, 'pf-seek-bar', 'fill');
        _this.element.appendChild(_this.seekBarFill);
        _this.seekBarFill.style.transform = 'scaleX(0)';

        _this.seekBarHighlight = document.createElement('div');
        _this.classListAdd(_this.seekBarHighlight, 'pf-seek-bar', 'highlight');
        _this.element.appendChild(_this.seekBarHighlight);
        _this.seekBarHighlight.style.transform = 'scaleX(0)';

        _this.seekBarFigure = document.createElement('div');
        _this.classListAdd(_this.seekBarFigure, 'pf-seek-bar-figure');
        _this.seekBarDuration.appendChild(_this.seekBarFigure);
        _this.seekBarFigure.style.left = '0%';

        _this.preview = new _SeekBarPreview2.default(meister);
        _this.seekBarDuration.appendChild(_this.preview.getNode());

        _this.on('itemTimeInfo', function (timeInfo) {
            return _this.onItemTimeInfo(timeInfo);
        });
        _this.on('playerTimeUpdate', function (e) {
            return _this.onTimeUpdate(e);
        });
        _this.on('playerSeek', function (e) {
            return _this.onPlayerSeek(e);
        });
        _this.on('playerProgress', function (e) {
            return _this.onPlayerProgress(e);
        });
        _this.on('playerLoadedMetadata', function () {
            _this.loadedMetadata = true;
        });

        // Ad events.
        _this.points = {};
        _this.on('adCuePoints', function (info) {
            return _this.onAdCuePoints(info);
        });
        _this.on('adEnded', function (info) {
            return _this.onAdEnded(info);
        });

        // Mouse hover events.
        _this.seekBarPadding.addEventListener('mouseover', function (e) {
            return _this.onMouseOver(e);
        });
        _this.seekBarPadding.addEventListener('mousemove', function (e) {
            return _this.onMouseMove(e);
        });
        _this.seekBarPadding.addEventListener('mouseout', function () {
            return _this.onMouseOut();
        });

        // Seeking event listeners.
        _this.seekBarPadding.addEventListener('mousedown', function (e) {
            return _this.onSeekDown(e);
        });
        _this.seekBarPadding.addEventListener('touchstart', function (e) {
            return _this.onSeekDown(e);
        });

        _this.onSeekMove = function (e) {
            // Prevent the page from moving while scrubbing
            e.preventDefault();

            // Get the location in the page, hacky for touch events...
            var normalizedProgress = _this.normalizeEventPosition(e);

            if (_this.isDragging) {
                updateBar(_this.seekBarFill, normalizedProgress);
                updateBar(_this.seekBarHighlight, normalizedProgress);
                _this.updateFigure(normalizedProgress);
                _this.preview.update(normalizedProgress);
                _this.updateCurrentTime(normalizedProgress);
            }
        };

        _this.onSeekUp = function (e) {
            // Do nothing when a second touch ends.
            if (window.TouchEvent && e instanceof window.TouchEvent && e.touches.length > 0) {
                return;
            }

            if (_this.isDragging) {
                // Resume video
                if (_this.wasPlaying) _this.meister.play();

                _this.isDragging = false;

                // Always hide the preview on mobile.
                if (window.TouchEvent && e instanceof window.TouchEvent) {
                    _this.preview.hide();
                } else if (e.target !== _this.seekBarPadding) {
                    _this.preview.hide();
                }

                document.removeEventListener('mousemove', _this.onSeekMove);
                document.removeEventListener('mouseup', _this.onSeekUp);

                document.removeEventListener('touchmove', _this.onSeekMove);
                document.removeEventListener('touchend', _this.onSeekUp);
            }
        };
        return _this;
    }

    _createClass(SeekBar, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            var _this2 = this;

            this.loadedMetadata = false;

            this.seekBarBuffered.style.transform = 'scaleX(0)';
            this.seekBarHighlight.style.transform = 'scaleX(0)';
            this.seekBarFill.style.transform = 'scaleX(0)';
            this.seekBarFigure.style.left = '0%';

            Object.keys(this.points).forEach(function (adID) {
                if (_this2.points[adID] !== null) {
                    _this2.points[adID].remove();
                }
            });

            this.points = {};
            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'onItemTimeInfo',
        value: function onItemTimeInfo(timeInfo) {
            if (timeInfo.isLive && !timeInfo.hasDVR) {
                this.classListAdd(this.element, 'pf-ui-element-hidden');
            } else {
                this.classListRemove(this.element, 'pf-ui-element-hidden');
            }
        }
    }, {
        key: 'onTimeUpdate',
        value: function onTimeUpdate(e) {
            var normalizedProgress = e.currentTime / e.duration;

            updateBar(this.seekBarFill, normalizedProgress);
            this.updateFigure(normalizedProgress);
        }
    }, {
        key: 'onPlayerProgress',
        value: function onPlayerProgress(e) {
            if (!e) return;

            var timeRanges = e.buffered;
            var currentTimeRangeIndex = this.findTimerange(timeRanges);

            // Should we not get an index don't bother updating.
            if (currentTimeRangeIndex === -1) {
                return;
            }

            var duration = this.meister.duration;
            var targetTime = timeRanges.end(currentTimeRangeIndex);

            if (this.playOffset) {
                targetTime -= this.playOffset;
                duration -= this.playOffset;
            }

            var normalizedProgress = targetTime / duration;
            updateBar(this.seekBarBuffered, normalizedProgress);
        }

        // Mouse hover events.

    }, {
        key: 'onMouseOver',
        value: function onMouseOver(e) {
            if (window.TouchEvent && e instanceof window.TouchEvent) {
                this.pagedownX = e.touches[0].pageX;
                var rect = e.target.getBoundingClientRect();
                this.mousedownX = this.pagedownX - rect.left;
            } else {
                this.mousedownX = e.offsetX;
                this.pagedownX = e.pageX;
            }

            this.preview.show();
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(e) {
            var normalizedProgress = this.normalizeEventPosition(e);

            updateBar(this.seekBarHighlight, normalizedProgress);
            this.preview.update(normalizedProgress);
        }
    }, {
        key: 'onMouseOut',
        value: function onMouseOut() {
            // Reset the highlight bar.
            updateBar(this.seekBarHighlight, 0);

            if (!this.isDragging) {
                this.preview.hide();
            }
        }

        // Seeking event handles.

    }, {
        key: 'onSeekDown',
        value: function onSeekDown(e) {
            // Prevents user from selecting the page.
            e.preventDefault();

            // Get the preview to show and update.
            this.onMouseOver(e);
            this.onMouseMove(e);

            // Pause video
            this.wasPlaying = this.meister.playing;
            this.meister.pause();

            this.isDragging = true;

            // Get the location in the page, hacky for touch events...
            var normalizedProgress = this.normalizeEventPosition(e);

            updateBar(this.seekBarFill, normalizedProgress);
            this.updateFigure(normalizedProgress);
            this.updateCurrentTime(normalizedProgress);

            document.addEventListener('mousemove', this.onSeekMove);
            document.addEventListener('mouseup', this.onSeekUp);

            document.addEventListener('touchmove', this.onSeekMove);
            document.addEventListener('touchend', this.onSeekUp);
        }

        // Player seeked, update the seekbar.

    }, {
        key: 'onPlayerSeek',
        value: function onPlayerSeek(e) {
            var normalizedProgress = e.relativePosition;

            updateBar(this.seekBarFill, normalizedProgress);
            updateBar(this.seekBarHighlight, normalizedProgress);
            this.updateFigure(normalizedProgress);
        }

        // Ad event handles/

    }, {
        key: 'onAdCuePoints',
        value: function onAdCuePoints(info) {
            for (var i = 0; i < info.points.length; i++) {
                this.setPoint(info.points[i]);
            }
        }
    }, {
        key: 'setPoint',
        value: function setPoint(time) {
            var self = this;

            function createPoint(t) {
                var elem = document.createElement('div');
                var normalizedProgress = t / self.meister.duration;

                self.meister.elementUtils.classListAdd(elem, 'pf-seek-bar-point', 'pf-ad-point');
                elem.id = 'adpoint-' + t;

                if (t < 0) {
                    normalizedProgress = 1;
                }

                var pointPosition = 100 * normalizedProgress;
                elem.style.left = pointPosition + '%';

                self.seekBarDuration.appendChild(elem);
                self.points['adpoint-' + t] = elem;
            }

            if (!this.loadedMetadata) {
                this.one('playerLoadedMetadata', function () {
                    createPoint(time);
                });
            } else {
                createPoint(time);
            }
        }
    }, {
        key: 'onAdEnded',
        value: function onAdEnded(info) {
            var adPodInfo = info.ad.getAdPodInfo();

            // Remove it on the end of the first ad in the break, because is simpler.
            var element = document.getElementById('adpoint-' + adPodInfo.getTimeOffset());
            delete this.points['adpoint-' + adPodInfo.getTimeOffset()];

            if (element !== null) {
                element.remove();
            }
        }

        // 'Private' methods.

    }, {
        key: 'normalizeEventPosition',
        value: function normalizeEventPosition(e) {
            var pageX = 0;
            if (window.TouchEvent && e instanceof window.TouchEvent) {
                pageX = e.touches[e.touches.length - 1].pageX;
            } else {
                pageX = e.pageX;
            }

            var position = pageX;
            position = this.mousedownX + (pageX - this.pagedownX);

            var normalizedProgress = position / this.seekBarPadding.offsetWidth;

            // Stay within the boundaries
            if (normalizedProgress > 1.0) {
                normalizedProgress = 1.0;
            } else if (normalizedProgress < 0) {
                normalizedProgress = 0;
            }

            return normalizedProgress;
        }
    }, {
        key: 'updateFigure',
        value: function updateFigure(percentage) {
            var figureLeftPercentage = 100 * percentage;
            this.seekBarFigure.style.left = figureLeftPercentage + '%';
        }
    }, {
        key: 'updateCurrentTime',
        value: function updateCurrentTime(percentage) {
            this.meister.trigger('requestSeek', {
                relativePosition: percentage
            });
        }
    }, {
        key: 'findTimerange',
        value: function findTimerange(timeRanges) {
            for (var i = 0; i < timeRanges.length; i++) {
                if (this.meister.currentTime >= timeRanges.start(i) && this.meister.currentTime <= timeRanges.end(i)) {
                    return i;
                }
            }

            // No range was found
            return -1;
        }
    }]);

    return SeekBar;
}(_BaseElement3.default);

exports.default = SeekBar;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepBackButton = function (_BaseElement) {
    _inherits(StepBackButton, _BaseElement);

    function StepBackButton(meister, config) {
        _classCallCheck(this, StepBackButton);

        var _this = _possibleConstructorReturn(this, (StepBackButton.__proto__ || Object.getPrototypeOf(StepBackButton)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-element-active');

        // Default
        _this.classListAdd(_this.element, 'icon');
        _this.classListAdd(_this.element, 'icon_icStepBackward');

        // Register event listeners
        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });
        return _this;
    }

    _createClass(StepBackButton, [{
        key: 'onClick',
        value: function onClick() {
            this.meister.trigger('requestSeek', {
                timeOffset: -1 * this.config.stepBack
            });
        }
    }]);

    return StepBackButton;
}(_BaseElement3.default);

exports.default = StepBackButton;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepForwardButton = function (_BaseElement) {
    _inherits(StepForwardButton, _BaseElement);

    function StepForwardButton(meister, config) {
        _classCallCheck(this, StepForwardButton);

        var _this = _possibleConstructorReturn(this, (StepForwardButton.__proto__ || Object.getPrototypeOf(StepForwardButton)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-element-active');

        // Default
        _this.classListAdd(_this.element, 'icon');
        _this.classListAdd(_this.element, 'icon_icStepForward');

        // Register event listeners
        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });
        return _this;
    }

    _createClass(StepForwardButton, [{
        key: 'onClick',
        value: function onClick() {
            this.meister.trigger('requestSeek', {
                timeOffset: this.config.stepForward
            });
        }
    }]);

    return StepForwardButton;
}(_BaseElement3.default);

exports.default = StepForwardButton;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LIVE_THRESHOLD = 35;

var TimeDisplay = function (_BaseElement) {
    _inherits(TimeDisplay, _BaseElement);

    function TimeDisplay(meister) {
        _classCallCheck(this, TimeDisplay);

        var _this = _possibleConstructorReturn(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-time-display');
        // HACK: dirty microsoft
        if (_this.meister.browser.isIE || _this.meister.browser.isEdge) {
            _this.classListAdd(_this.element, 'microsoft-hack');
        }

        _this.currentTime = document.createElement('span');
        _this.currentTime.innerHTML = '0:00';
        _this.classListAdd(_this.currentTime, 'time-display-element');

        _this.seperator = document.createElement('span');
        _this.seperator.innerHTML = '/';
        _this.classListAdd(_this.seperator, 'time-display-element');

        _this.duration = document.createElement('span');
        _this.duration.innerHTML = '0:00';
        _this.classListAdd(_this.duration, 'time-display-element');
        _this.duration.addEventListener('click', function () {
            return _this.meister.trigger('requestGoLive');
        });

        _this.element.appendChild(_this.currentTime);
        _this.element.appendChild(_this.seperator);
        _this.element.appendChild(_this.duration);

        _this.isLive = false;

        _this.on('itemTimeInfo', function (timeInfo) {
            return _this.onItemTimeInfo(timeInfo);
        });
        _this.on('playerTimeUpdate', function (e) {
            return _this.onTimeUpdate(e);
        });
        _this.on('playerSeek', function (e) {
            return _this.onPlayerSeek(e);
        });

        // Ad variables.
        _this.adTimer = null;
        _this.adDuration = 0;
        return _this;
    }

    _createClass(TimeDisplay, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.isLive = false;
            this.classListRemove(this.duration, 'go-live', 'pf-ui-element-active');

            this.currentTime.innerHTML = '-';
            this.duration.innerHTML = '-';
        }
    }, {
        key: 'onItemTimeInfo',
        value: function onItemTimeInfo(timeInfo) {
            if (timeInfo.isLive) {
                this.isLive = true;
                this.duration.innerHTML = 'LIVE';

                if (!timeInfo.hasDVR) this.currentTime.innerHTML = '-';
            } else {
                this.duration.innerHTML = this.createTimeString(timeInfo.duration);
            }
        }
    }, {
        key: 'onTimeUpdate',
        value: function onTimeUpdate(e) {
            // Set the duration and current time for VODs
            if (!this.isLive) {
                this.currentTime.innerHTML = this.createTimeString(e.currentTime);
                this.duration.innerHTML = this.createTimeString(e.duration);
                return;
            }

            // If a livestream is close enough to the edge display no time.
            var behindLive = e.duration - e.currentTime;

            if (behindLive < LIVE_THRESHOLD) {
                this.currentTime.innerHTML = '-';
                this.classListRemove(this.duration, 'go-live', 'pf-ui-element-active');
                return;
            }
        }
    }, {
        key: 'onPlayerSeek',
        value: function onPlayerSeek(e) {
            // Set the duration and current time for VODs
            if (!this.isLive) {
                this.currentTime.innerHTML = this.createTimeString(e.currentTime);
                this.duration.innerHTML = this.createTimeString(e.duration);
                return;
            }

            var behindLive = e.duration - e.currentTime;
            if (behindLive < LIVE_THRESHOLD) {
                this.currentTime.innerHTML = '-';
                this.classListRemove(this.duration, 'go-live', 'pf-ui-element-active');
                return;
            }

            // Display the amount of time the player is behind live.
            var timeString = this.createTimeString(behindLive);
            this.currentTime.innerHTML = '-' + timeString;

            // Activate the go live button.
            this.classListAdd(this.duration, 'go-live', 'pf-ui-element-active');
        }
    }, {
        key: 'createTimeString',
        value: function createTimeString(time) {
            var roundTime = Math.round(time);
            if (roundTime < 0) {
                roundTime = 0;
            }

            return this.meister.utils.timeToHMS(roundTime);
        }
    }]);

    return TimeDisplay;
}(_BaseElement3.default);

exports.default = TimeDisplay;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _noop = __webpack_require__(14);

var _noop2 = _interopRequireDefault(_noop);

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

var _Canvas = __webpack_require__(16);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CastButton = function (_BaseElement) {
    _inherits(CastButton, _BaseElement);

    function CastButton(meister) {
        _classCallCheck(this, CastButton);

        var _this = _possibleConstructorReturn(this, (CastButton.__proto__ || Object.getPrototypeOf(CastButton)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active', 'pf-ui-element-hidden');
        _this.classListAdd(_this.element, 'icon');

        _this.onClick = _noop2.default;

        if (window.WebKitPlaybackTargetAvailabilityEvent) {
            _this.on('playerCreated', function () {
                _this.enableAirplay();
            });
        }

        _this.isChromecastAvailible(function (available) {
            if (!available) return;

            _this.classListAdd(_this.element, 'icon_icCast');
            _this.classListRemove(_this.element, 'pf-ui-element-hidden');
            _this.onClick = _this.loadChromecast;

            _this.canvasVideo = new _Canvas2.default(meister);
        });

        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });
        return _this;
    }

    _createClass(CastButton, [{
        key: 'isChromecastAvailible',
        value: function isChromecastAvailible(onStatusChange) {
            var _this2 = this;

            var tries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

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

            setTimeout(function () {
                _this2.isChromecastAvailible(onStatusChange, tries - 1);
            }, 1000);
        }
    }, {
        key: 'enableAirplay',
        value: function enableAirplay() {
            // If there is no player to add a listener to return. Should be redundant
            if (!this.meister.playerPlugin) return;

            var self = this;
            this.meister.playerPlugin.mediaElement.addEventListener('webkitplaybacktargetavailabilitychanged', function (e) {
                var _this3 = this;

                //eslint-disable-line
                // @TODO Can anyone look at this part and why it gives errors?
                switch (e.availability) {
                    case 'available':
                        if (self.meister.config.debug) {
                            console.log('AirPlay is available');
                        }

                        self.element.classList.remove('pf-ui-element-hidden');
                        self.element.classList.add('icon_icAirplay');

                        self.onClick = function () {
                            return _this3.webkitShowPlaybackTargetPicker();
                        };
                        break;

                    case 'not-available':
                        if (self.meister.config.debug) {
                            console.log('airplay not available');
                        }

                        self.element.classList.add('pf-ui-element-hidden');
                        self.element.classList.remove('icon_icAirplay');

                        self.onClick = _noop2.default;
                        break;
                    default:
                        break;
                }
            });
        }
    }, {
        key: 'loadChromecast',
        value: function loadChromecast() {
            // let snapshotCanvas = this.canvasVideo.takeSnapshot();
            var src = this.meister.playerPlugin.currentSrc;

            var player = this.meister.getPlayerByType('chromecast', {
                src: src,
                type: 'video/mp4'
            });

            // this.meister.playerWrapper.appendChild(snapshotCanvas);
            player.currentSrc = src;
            player.load();

            // this.chromecaster.onUpdate((info) => {
            //     console.log(info);
            // });
            //
            // this.chromecaster.launchVideoElement(this.meister.playerPlugin.mediaElement);
        }
    }]);

    return CastButton;
}(_BaseElement3.default);

exports.default = CastButton;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;charset=utf-8;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _meister = __webpack_require__(39);

var _meister2 = _interopRequireDefault(_meister);

var _StandardUi = __webpack_require__(18);

var _StandardUi2 = _interopRequireDefault(_StandardUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_meister2.default);

exports.default = _StandardUi2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = noop;

// no operation
// null -> null
function noop() {}

// call noop to satisfy test cov suites
noop();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

var _PlayButton = __webpack_require__(19);

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _FullscreenButton = __webpack_require__(2);

var _FullscreenButton2 = _interopRequireDefault(_FullscreenButton);

var _VolumeSlider = __webpack_require__(1);

var _VolumeSlider2 = _interopRequireDefault(_VolumeSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdControls = function (_BaseElement) {
    _inherits(AdControls, _BaseElement);

    function AdControls(meister, config) {
        _classCallCheck(this, AdControls);

        var _this = _possibleConstructorReturn(this, (AdControls.__proto__ || Object.getPrototypeOf(AdControls)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.adControls = document.createElement('div');
        _this.classListAdd(_this.adControls, 'pf-ad-controls');
        _this.element.appendChild(_this.adControls);

        // Progress bar adding
        _this.progressBar = document.createElement('div');
        _this.classListAdd(_this.progressBar, 'pf-ad-progress-bar-fill');
        _this.progressBar.style.transform = 'scaleX(0)';
        _this.adControls.appendChild(_this.progressBar);

        _this.adInfoView = document.createElement('div');
        _this.classListAdd(_this.adInfoView, 'pf-ad-info-view');
        _this.adControls.appendChild(_this.adInfoView);

        // The real controls (play/pause)
        _this.extraAdControlsWrapper = document.createElement('div');
        _this.classListAdd(_this.extraAdControlsWrapper, 'pf-extra-ad-controls');
        _this.classListAdd(_this.extraAdControlsWrapper, 'pf-ui-element-hidden');
        _this.element.appendChild(_this.extraAdControlsWrapper);

        // Add the controls to the wrapper
        _this.adPlayButton = new _PlayButton2.default(meister, config, 'ad');
        _this.extraAdControlsWrapper.appendChild(_this.adPlayButton.getNode());

        _this.fullscreenButton = new _FullscreenButton2.default(meister);
        _this.classListAdd(_this.fullscreenButton.getNode(), 'pf-ad-fullscreen');
        _this.classListRemove(_this.fullscreenButton.getNode(), 'pf-mobile');
        _this.extraAdControlsWrapper.appendChild(_this.fullscreenButton.getNode());

        _this.volumeSlider = new _VolumeSlider2.default(meister);
        _this.classListRemove(_this.volumeSlider.getNode(), 'pf-mobile');
        _this.extraAdControlsWrapper.appendChild(_this.volumeSlider.getNode());

        // advertisement count
        _this.adCount = document.createElement('div');
        _this.classListAdd(_this.adCount, 'pf-ad-count');
        _this.adCount.textContent = 'Ad 1 of X';
        _this.adInfoView.appendChild(_this.adCount);

        _this.adCountDown = document.createElement('div');
        _this.classListAdd(_this.adCountDown, 'pf-ad-countdown');
        _this.adCountDown.textContent = '(0)';
        _this.adInfoView.appendChild(_this.adCountDown);

        _this.meister.container.addEventListener('mousemove', function () {
            // HACK: Need to make actual touch-friendly ad controls.
            if (_this.meister.browser.isMobile) {
                return;
            }

            _this.adControls.classList.add('pf-ad-controls-move-up');
            _this.adControls.classList.remove('pf-ad-controls-move-down');

            _this.extraAdControlsWrapper.classList.remove('pf-ui-element-hidden');
            _this.extraAdControlsWrapper.classList.add('pf-ad-controls-shown-animation');
            _this.extraAdControlsWrapper.classList.remove('pf-ad-controls-hide-animation');
        });

        _this.meister.container.addEventListener('mouseleave', function () {
            _this.adControls.style.display = 'block';

            _this.adControls.classList.remove('pf-ad-controls-move-up');
            _this.adControls.classList.add('pf-ad-controls-move-down');

            _this.extraAdControlsWrapper.classList.remove('pf-ad-controls-shown-animation');
            _this.extraAdControlsWrapper.classList.add('pf-ad-controls-hide-animation');
        });

        _this.on('adStarted', function (info) {
            var ad = info.adsManager.getCurrentAd();
            var adPodInfo = ad.getAdPodInfo();

            _this.adCount.textContent = 'Ad ' + adPodInfo.getAdPosition() + ' of ' + adPodInfo.getTotalAds();
            var adDuration = _this.meister.utils.timeToHMS(Math.round(ad.getDuration()));
            _this.adCountDown.textContent = '(' + adDuration + ')';
        });

        _this.on('adTimeupdate', function (info) {
            var normalizedProgress = info.currentTime / info.duration;
            _this.progressBar.style.transform = 'scaleX(' + normalizedProgress + ')';

            var timeLeft = Math.round(info.duration - info.currentTime);
            var timeLeftString = _this.meister.utils.timeToHMS(timeLeft);
            _this.adCountDown.textContent = '(' + timeLeftString + ')';
        });

        _this.on('adEnded', function () {
            _this.progressBar.style.transform = 'scaleX(0)';
            _this.adCountDown.textContent = '(0)';
        });
        return _this;
    }

    _createClass(AdControls, [{
        key: 'show',
        value: function show() {
            this.classListRemove(this.element, 'pf-ui-element-hidden');
            this.meister.muted = this.meister.config.startMuted;
            this.meister.trigger('playerVolumeChange');
            this.adPlayButton.toggleIcon(true);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.classListAdd(this.element, 'pf-ui-element-hidden');
            // Reset the progress bar.
            this.progressBar.style.transform = 'scaleX(0)';
            this.adCount.textContent = 'Ad 1 of X';
            this.adCountDown.textContent = '(0)';
        }
    }]);

    return AdControls;
}(_BaseElement3.default);

exports.default = AdControls;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
    function Canvas(meister) {
        _classCallCheck(this, Canvas);

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = meister.container.offsetWidth;
        this.canvas.height = meister.container.offsetHeight;

        // meister.container.appendChild(this.canvas);
        this.meister = meister;
    }

    _createClass(Canvas, [{
        key: 'takeSnapshot',
        value: function takeSnapshot() {
            var _this = this;

            this.meister.playerPlugin.mediaElement.setAttribute('crossOrigin', 'anonymous');
            var video = this.meister.playerPlugin.mediaElement;

            this.context.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);

            var img = new Image();

            img.onload = function () {
                var imgHeight = img.height / 8;
                var imgWidth = img.width / 8;
                var imgx = _this.canvas.width - imgWidth * 3;
                var imgy = _this.canvas.height - imgHeight * 2.5;

                _this.context.drawImage(img, imgx, imgy, imgWidth, imgHeight);
            };

            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chromecast_cast_button_icon.svg/1000px-Chromecast_cast_button_icon.svg.png';

            return this.canvas;
        }
    }]);

    return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlayButton = __webpack_require__(3);

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _StepBackButton = __webpack_require__(7);

var _StepBackButton2 = _interopRequireDefault(_StepBackButton);

var _StepForwardButton = __webpack_require__(8);

var _StepForwardButton2 = _interopRequireDefault(_StepForwardButton);

var _PlaylistButtons = __webpack_require__(4);

var _PlaylistButtons2 = _interopRequireDefault(_PlaylistButtons);

var _TimeDisplay = __webpack_require__(9);

var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

var _QualityButton = __webpack_require__(5);

var _QualityButton2 = _interopRequireDefault(_QualityButton);

var _SeekBar = __webpack_require__(6);

var _SeekBar2 = _interopRequireDefault(_SeekBar);

var _VolumeSlider = __webpack_require__(1);

var _VolumeSlider2 = _interopRequireDefault(_VolumeSlider);

var _CastButton = __webpack_require__(10);

var _CastButton2 = _interopRequireDefault(_CastButton);

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CondensedBar = function (_BaseElement) {
    _inherits(CondensedBar, _BaseElement);

    function CondensedBar(config, meister) {
        _classCallCheck(this, CondensedBar);

        var _this = _possibleConstructorReturn(this, (CondensedBar.__proto__ || Object.getPrototypeOf(CondensedBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'bottom');

        // Construct the bottom left half
        _this.bottomLeftWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomLeftWrapper, 'pf-ui-wrapper-left');

        // step back button:
        if (_this.config.stepBack) {
            _this.stepBackButton = new _StepBackButton2.default(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepBackButton.getNode());
        }

        _this.playButton = new _PlayButton2.default(meister, config);
        _this.bottomLeftWrapper.appendChild(_this.playButton.getNode());

        if (_this.config.stepForward) {
            _this.stepForwardButton = new _StepForwardButton2.default(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepForwardButton.getNode());
        }

        _this.playlistButton = new _PlaylistButtons2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.playlistButton.getNode());

        _this.volumeSlider = new _VolumeSlider2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.volumeSlider.getNode());

        _this.timeDisplay = new _TimeDisplay2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.timeDisplay.getNode());

        // Append to wrapper
        _this.element.appendChild(_this.bottomLeftWrapper);

        // Construct and append the top wrapper
        _this.seekBar = new _SeekBar2.default(meister);
        _this.element.appendChild(_this.seekBar.getNode());

        // Construct the bottom right half
        _this.bottomRightWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomRightWrapper, 'pf-ui-wrapper-right');

        if (!_this.config.castButton || !_this.config.castButton.hide) {
            _this.castButton = new _CastButton2.default(meister);
            _this.bottomRightWrapper.appendChild(_this.castButton.getNode());
        }

        if (!_this.config.qualityButton || !_this.config.qualityButton.hide) {
            _this.qualityButton = new _QualityButton2.default(meister, _this.config);
            _this.bottomRightWrapper.appendChild(_this.qualityButton.getNode());
        }

        // Append to wrapper
        _this.element.appendChild(_this.bottomRightWrapper);

        // Hide/show on plugin overlay
        _this.on('uiPluginOpen', function () {
            return _this.onPluginOpen();
        });
        _this.on('uiPluginClose', function () {
            return _this.onPluginClose();
        });

        // Clicks inside the control bars shouldn't play/pause the player.
        _this.element.addEventListener('click', function (e) {
            var clickEvent = e || event;
            clickEvent.stopPropagation();
        });
        return _this;
    }

    _createClass(CondensedBar, [{
        key: 'hide',
        value: function hide() {
            if (this.qualityButton) {
                this.qualityButton.hide();
            }
        }
    }, {
        key: 'onPluginOpen',
        value: function onPluginOpen() {
            this.classListAdd(this.element, 'pf-ui-overlay-active');
        }
    }, {
        key: 'onPluginClose',
        value: function onPluginClose() {
            this.classListRemove(this.element, 'pf-ui-overlay-active');
        }
    }]);

    return CondensedBar;
}(_BaseElement3.default);

exports.default = CondensedBar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TopBar = __webpack_require__(31);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _BottomBar = __webpack_require__(20);

var _BottomBar2 = _interopRequireDefault(_BottomBar);

var _CondensedBar = __webpack_require__(17);

var _CondensedBar2 = _interopRequireDefault(_CondensedBar);

var _Preview = __webpack_require__(27);

var _Preview2 = _interopRequireDefault(_Preview);

var _AdControls = __webpack_require__(15);

var _AdControls2 = _interopRequireDefault(_AdControls);

var _PluginSpace = __webpack_require__(26);

var _PluginSpace2 = _interopRequireDefault(_PluginSpace);

var _Spinner = __webpack_require__(28);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME_TILL_FADE = 3000;

var StandardUi = function (_Meister$Ui) {
    _inherits(StandardUi, _Meister$Ui);

    _createClass(StandardUi, null, [{
        key: 'KEY_SPACEBAR',
        get: function get() {
            return 32;
        }
    }, {
        key: 'KEY_MEDIAPLAYPAUSE',
        get: function get() {
            return 179;
        }
    }]);

    function StandardUi(config, meister) {
        _classCallCheck(this, StandardUi);

        var _this = _possibleConstructorReturn(this, (StandardUi.__proto__ || Object.getPrototypeOf(StandardUi)).call(this, config, meister));

        if (Number.isFinite(_this.config.timeToFade)) {
            TIME_TILL_FADE = _this.config.timeToFade * 1000;
        }

        _this.standardWrapper = document.createElement('div');
        _this.meister.elementUtils.classListAdd(_this.standardWrapper, 'pf-controls-wrapper');

        _this.preview = new _Preview2.default(meister);
        _this.spinner = new _Spinner2.default(meister);

        _this.isLive = false;

        // Don't add this listener on mobile; makes controls annyoing to show
        if (!_this.meister.browser.isMobile) {
            _this.meister.on('itemTimeInfo', function (timeInfo) {
                _this.isLive = timeInfo.isLive;
            });

            _this.standardWrapper.addEventListener('click', function () {
                if (_this.isLive && _this.config.disablePauseWithLive) {
                    return;
                }

                if (_this.meister.playing) {
                    _this.meister.pause(true);
                } else {
                    _this.meister.play(true);
                }
            });
        }

        if (_this.config.condensedUi) {
            _this.bottomBar = new _CondensedBar2.default(config, meister);
        } else {
            _this.topBar = new _TopBar2.default(config, meister);
            _this.bottomBar = new _BottomBar2.default(config, meister);
        }

        _this.adControls = new _AdControls2.default(meister, config);
        _this.pluginSpace = new _PluginSpace2.default(meister, _this);

        _this.on('adBreakStarted', function (e) {
            return _this.onAdBreakStarted(e);
        });
        _this.on(['adBreakEnded', 'itemUnloaded'], function (e) {
            return _this.onAdBreakEnded(e);
        });

        // Bind class methods to instance for easier event listener removal.
        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseLeave = _this.onMouseLeave.bind(_this);

        _this.mouseTimeout = null;
        _this.controlsTimeout = null;
        _this.isControlsShown = false;

        _this.fixedControls = !!_this.config.fixedControls;
        _this.toggleFixedControls(_this.fixedControls);

        _this.on('standard:toggleFixedControls', function (e) {
            return _this.toggleFixedControls(e.fixed);
        });
        return _this;
    }

    _createClass(StandardUi, [{
        key: 'toggleFixedControls',
        value: function toggleFixedControls(on) {
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
    }, {
        key: 'onMouseDown',
        value: function onMouseDown() {
            this.dragging = true;
            window.addEventListener('mouseup', this.onMouseUp);
            window.addEventListener('touchend', this.onMouseUp);
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            this.dragging = false;
            // Fake mouse movement
            this.onMouseMove();

            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('touchend', this.onMouseUp);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove() {
            clearTimeout(this.mouseTimeout);
            clearTimeout(this.controlsTimeout);

            this.showControls();
            this.showCursor();

            this.mouseTimeout = setTimeout(this.hideCursor.bind(this), TIME_TILL_FADE);
            this.controlsTimeout = setTimeout(this.hideControls.bind(this), TIME_TILL_FADE);
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            clearTimeout(this.mouseTimeout);
            clearTimeout(this.controlsTimeout);

            this.hideControls();
            this.showCursor();
        }
    }, {
        key: 'onAdBreakStarted',
        value: function onAdBreakStarted() {
            this.meister.elementUtils.classListAdd(this.standardWrapper, 'pf-ui-element-hidden');
            this.meister.adWrapper.classList.remove('pf-ui-element-hidden');
            this.adControls.show();
        }
    }, {
        key: 'onAdBreakEnded',
        value: function onAdBreakEnded() {
            this.meister.elementUtils.classListRemove(this.standardWrapper, 'pf-ui-element-hidden');
            this.meister.adWrapper.classList.add('pf-ui-element-hidden');
            this.adControls.hide();
        }
    }, {
        key: 'hideCursor',
        value: function hideCursor() {
            if (this.dragging) {
                return;
            }

            this.meister.container.style.cursor = 'none';
        }
    }, {
        key: 'showCursor',
        value: function showCursor() {
            this.meister.container.style.cursor = 'auto';
        }
    }, {
        key: 'hideControls',
        value: function hideControls() {
            if (this.dragging || !this.meister.playing) {
                return;
            }

            this.bottomBar.getNode().classList.add('hidden');
            if (!this.config.condensedUi) {
                this.topBar.getNode().classList.add('hidden');
            }
            this.bottomBar.hide();

            if (this.isControlsShown) {
                this.meister.trigger('uiEvent:hideControls', {});
            }

            this.isControlsShown = false;
        }
    }, {
        key: 'showControls',
        value: function showControls() {
            this.bottomBar.getNode().classList.remove('hidden');
            if (!this.config.condensedUi) {
                this.topBar.getNode().classList.remove('hidden');
            }

            if (!this.isControlsShown) {
                this.meister.trigger('uiEvent:showControls', {});
            }

            this.isControlsShown = true;
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.standardWrapper.appendChild(this.preview.getNode());
            this.standardWrapper.appendChild(this.spinner.getNode());

            this.standardWrapper.appendChild(this.pluginSpace.getNode());
            if (!this.config.condensedUi) {
                this.standardWrapper.appendChild(this.topBar.getNode());
            }
            this.standardWrapper.appendChild(this.bottomBar.getNode());
            this.meister.adWrapper.appendChild(this.adControls.getNode());

            this.controlsWrapper.appendChild(this.standardWrapper);

            // Insert other ui plugins
            this.meister.trigger('uiReady', {
                pluginSpace: this.pluginSpace.getNode()
            });
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _get(StandardUi.prototype.__proto__ || Object.getPrototypeOf(StandardUi.prototype), 'destroy', this).call(this);

            clearTimeout(this.mouseTimeout);
            clearTimeout(this.controlsTimeout);

            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('touchend', this.onMouseUp);
        }
    }], [{
        key: 'pluginName',
        get: function get() {
            return 'StandardUi';
        }
    }]);

    return StandardUi;
}(Meister.Ui);

Meister.registerPlugin(StandardUi.pluginName, StandardUi);

exports.default = StandardUi;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayButton = function (_BaseElement) {
    _inherits(PlayButton, _BaseElement);

    function PlayButton(meister) {
        _classCallCheck(this, PlayButton);

        var _this = _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, meister));

        _this.isPlaying = true;

        _this.element = document.createElement('div');
        _this.meister.elementUtils.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-element-active');

        // Default
        _this.element.classList.add('icon');
        _this.element.classList.add('icon_icPause');

        // Register event listeners
        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });

        _this.on('playerPlay', function () {
            _this.isPlaying = true;
            _this.toggleIcon();
        });
        _this.on('playerPause', function () {
            _this.isPlaying = false;
            _this.toggleIcon();
        });
        _this.on('itemLoaded', function () {
            return _this.toggleIcon();
        });
        return _this;
    }

    _createClass(PlayButton, [{
        key: 'onClick',
        value: function onClick() {
            if (this.isPlaying) {
                this.meister.pause();
                this.isPlaying = false;
            } else {
                this.meister.play();
                this.isPlaying = true;
            }

            this.toggleIcon();
        }
    }, {
        key: 'toggleIcon',
        value: function toggleIcon(state) {
            this.isPlaying = state !== undefined ? state : this.isPlaying;
            if (this.isPlaying) {
                this.element.classList.add('icon_icPause');
                this.element.classList.remove('icon_icPlay');
            } else {
                this.element.classList.remove('icon_icPause');
                this.element.classList.add('icon_icPlay');
            }
        }
    }]);

    return PlayButton;
}(_BaseElement3.default);

exports.default = PlayButton;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlayButton = __webpack_require__(3);

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _StepBackButton = __webpack_require__(7);

var _StepBackButton2 = _interopRequireDefault(_StepBackButton);

var _StepForwardButton = __webpack_require__(8);

var _StepForwardButton2 = _interopRequireDefault(_StepForwardButton);

var _PlaylistButtons = __webpack_require__(4);

var _PlaylistButtons2 = _interopRequireDefault(_PlaylistButtons);

var _FullscreenButton = __webpack_require__(2);

var _FullscreenButton2 = _interopRequireDefault(_FullscreenButton);

var _TimeDisplay = __webpack_require__(9);

var _TimeDisplay2 = _interopRequireDefault(_TimeDisplay);

var _QualityButton = __webpack_require__(5);

var _QualityButton2 = _interopRequireDefault(_QualityButton);

var _LanguageButton = __webpack_require__(22);

var _LanguageButton2 = _interopRequireDefault(_LanguageButton);

var _CaptionsButton = __webpack_require__(21);

var _CaptionsButton2 = _interopRequireDefault(_CaptionsButton);

var _SeekBar = __webpack_require__(6);

var _SeekBar2 = _interopRequireDefault(_SeekBar);

var _VolumeSlider = __webpack_require__(1);

var _VolumeSlider2 = _interopRequireDefault(_VolumeSlider);

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BottomBar = function (_BaseElement) {
    _inherits(BottomBar, _BaseElement);

    function BottomBar(config, meister) {
        _classCallCheck(this, BottomBar);

        var _this = _possibleConstructorReturn(this, (BottomBar.__proto__ || Object.getPrototypeOf(BottomBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'bottom');

        // Construct the bottom left half
        _this.bottomLeftWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomLeftWrapper, 'pf-ui-wrapper-left');

        // step back button:
        if (_this.config.stepBack) {
            _this.stepBackButton = new _StepBackButton2.default(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepBackButton.getNode());
        }

        _this.playButton = new _PlayButton2.default(meister, config);
        _this.bottomLeftWrapper.appendChild(_this.playButton.getNode());

        if (_this.config.stepForward) {
            _this.stepForwardButton = new _StepForwardButton2.default(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepForwardButton.getNode());
        }

        _this.playlistButton = new _PlaylistButtons2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.playlistButton.getNode());

        _this.volumeSlider = new _VolumeSlider2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.volumeSlider.getNode());

        _this.timeDisplay = new _TimeDisplay2.default(meister);
        _this.bottomLeftWrapper.appendChild(_this.timeDisplay.getNode());

        // Append to wrapper
        _this.element.appendChild(_this.bottomLeftWrapper);

        // Construct and append the top wrapper
        _this.seekBar = new _SeekBar2.default(meister);
        _this.element.appendChild(_this.seekBar.getNode());

        // Construct the bottom right half
        _this.bottomRightWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomRightWrapper, 'pf-ui-wrapper-right');

        _this.fullscreenButton = new _FullscreenButton2.default(meister);
        _this.bottomRightWrapper.appendChild(_this.fullscreenButton.getNode());

        if (!_this.config.qualityButton || !_this.config.qualityButton.hide) {
            _this.qualityButton = new _QualityButton2.default(meister, _this.config);
            _this.bottomRightWrapper.appendChild(_this.qualityButton.getNode());
        }

        _this.langButton = new _LanguageButton2.default(meister);
        _this.bottomRightWrapper.appendChild(_this.langButton.getNode());

        _this.ccButton = new _CaptionsButton2.default(meister);
        _this.bottomRightWrapper.appendChild(_this.ccButton.getNode());

        // Append to wrapper
        _this.element.appendChild(_this.bottomRightWrapper);

        // Hide/show on plugin overlay
        _this.on('uiPluginOpen', function () {
            return _this.onPluginOpen();
        });
        _this.on('uiPluginClose', function () {
            return _this.onPluginClose();
        });

        // Clicks inside the control bars shouldn't play/pause the player.
        _this.element.addEventListener('click', function (e) {
            var clickEvent = e || event;
            clickEvent.stopPropagation();
        });
        return _this;
    }

    _createClass(BottomBar, [{
        key: 'hide',
        value: function hide() {
            if (this.qualityButton) {
                this.qualityButton.hide();
            }
        }
    }, {
        key: 'onPluginOpen',
        value: function onPluginOpen() {
            this.classListAdd(this.element, 'pf-ui-overlay-active');
        }
    }, {
        key: 'onPluginClose',
        value: function onPluginClose() {
            this.classListRemove(this.element, 'pf-ui-overlay-active');
        }
    }]);

    return BottomBar;
}(_BaseElement3.default);

exports.default = BottomBar;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaptionsButton = function (_BaseElement) {
    _inherits(CaptionsButton, _BaseElement);

    function CaptionsButton(meister) {
        _classCallCheck(this, CaptionsButton);

        var _this = _possibleConstructorReturn(this, (CaptionsButton.__proto__ || Object.getPrototypeOf(CaptionsButton)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        _this.classListAdd(_this.element, 'icon', 'icon_icCc');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.captionSelector = document.createElement('div');
        _this.classListAdd(_this.captionSelector, 'pf-quality-selector', 'hidden');

        _this.element.appendChild(_this.captionSelector);

        _this.element.addEventListener('click', _this.onClick.bind(_this));

        _this.captions = null;
        _this.on('itemLoaded', _this.onItemLoaded.bind(_this));

        // Store this eventfunction in the instance for easier removal.
        _this.hide = function () {
            _this.classListAdd(_this.captionSelector, 'hidden');
            document.body.removeEventListener('click', _this.hide);
        };
        return _this;
    }

    _createClass(CaptionsButton, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.captionSelector.innerHTML = '';
            this.captions = null;

            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            // TODO: Perhaps do this later?
            e.stopPropagation();

            // Show/hide menu when the button is clicked.
            if (!e.target.hasAttribute('lang')) {
                if (this.captionSelector.classList.contains('hidden')) {
                    this.show();
                } else {
                    this.hide();
                }

                return;
            }

            // Element has attribute lang, must be a language option
            var newLang = e.target.getAttribute('lang');
            this.selectLang(newLang);
            this.hide();
        }
    }, {
        key: 'show',
        value: function show() {
            this.classListRemove(this.captionSelector, 'hidden');
            document.body.addEventListener('click', this.hide);
        }
    }, {
        key: 'onItemLoaded',
        value: function onItemLoaded(e) {
            var _this2 = this;

            if (!e.item || !e.item.captions) return;

            // Slice to make a copy of the array;
            if (!Array.isArray(e.item.captions)) {
                this.captions = [e.item.captions];
            } else {
                this.captions = e.item.captions.slice(0).sort(function (a, b) {
                    var titleA = a.title.toUpperCase();
                    var titleB = b.title.toUpperCase();
                    if (titleA < titleB) return -1;
                    if (titleA > titleB) return 1;

                    return 0;
                });
            }

            // Add an option to turn cc off.
            this.captions.push({ title: this.meister.Localization.get('NONE'), lang: 'none' });

            this.classListRemove(this.element, 'pf-ui-element-hidden');

            this.captions.forEach(function (caption) {
                var language = caption.title;
                var code = caption.lang;
                caption.option = _this2.createOption(language, code);
            });

            this.classListRemove(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'createOption',
        value: function createOption(language, code) {
            var languageOption = document.createElement('div');
            languageOption.classList.add('pf-quality-option');

            languageOption.textContent = language.charAt(0).toUpperCase() + language.toLowerCase().slice(1);

            languageOption.setAttribute('lang', code);

            languageOption.selected = document.createElement('div');
            languageOption.selected.classList.add('pf-quality-option-select');
            languageOption.selected.classList.add('icon');
            // Check for mobile.
            if (this.isMobile) languageOption.selected.classList.add('pf-mobile');
            languageOption.appendChild(languageOption.selected);

            this.captionSelector.appendChild(languageOption);
            return languageOption;
        }
    }, {
        key: 'selectLang',
        value: function selectLang(languageCode) {
            this.captions.forEach(function (caption) {
                caption.option.selected.classList.remove('icon_icCheck');
            });

            if (languageCode === 'none') {
                this.meister.trigger('requestCaptions', { newLanguage: 'none' });
                return;
            }

            var newCaption = this.captions.find(function (caption) {
                return caption.lang === languageCode;
            });

            newCaption.option.selected.classList.add('icon_icCheck');
            this.meister.trigger('requestCaptions', newCaption);
        }
    }]);

    return CaptionsButton;
}(_BaseElement3.default);

exports.default = CaptionsButton;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanguageButton = function (_BaseElement) {
    _inherits(LanguageButton, _BaseElement);

    function LanguageButton(meister) {
        _classCallCheck(this, LanguageButton);

        var _this = _possibleConstructorReturn(this, (LanguageButton.__proto__ || Object.getPrototypeOf(LanguageButton)).call(this, meister));

        _this.element = document.createElement('div');

        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        _this.classListAdd(_this.element, 'icon', 'icon_icLanguage');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.on('itemLanguages', function (languages) {
            return _this.onItemLanguages(languages);
        });
        return _this;
    }

    _createClass(LanguageButton, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'onItemLanguages',
        value: function onItemLanguages() {
            this.classListRemove(this.element, 'pf-ui-element-hidden');

            // TODO: Process languages.
        }
    }]);

    return LanguageButton;
}(_BaseElement3.default);

exports.default = LanguageButton;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareBitrateOption = prepareBitrateOption;
exports.selectBitrate = selectBitrate;
function prepareBitrateOption(element, bitrate, index, transform) {
    var qualityOption = element;

    if (bitrate === 'auto') {
        qualityOption.textContent = bitrate;
    } else {
        qualityOption.textContent = transform(bitrate);
    }

    qualityOption.setAttribute('index', index);
}

function selectBitrate(bitrates, index, silent) {
    bitrates.forEach(function (bitrate) {
        if (bitrate.index === index) {
            bitrate.option.selected.classList.add('icon_icCheck');
        } else {
            bitrate.option.selected.classList.remove('icon_icCheck');
        }
    });

    return silent ? null : index;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expandQualityMapping = expandQualityMapping;
exports.prepareResolutionMapping = prepareResolutionMapping;
exports.prepareResolutionOption = prepareResolutionOption;
exports.selectResolution = selectResolution;
function expandQualityMapping(qualityMapping, index) {
    return {
        index: index,
        bitrates: [],
        from: qualityMapping.from,
        to: qualityMapping.to,
        resolution: qualityMapping.resolution
    };
}

function setResolution(bitrate, bitrateIndex, qualityMapping) {
    var targetMapping = qualityMapping.find(function (mapping) {
        return bitrate > mapping.from && bitrate <= mapping.to;
    });
    if (!targetMapping) {
        console.warn('No resolution found for bitrate: ' + bitrate);
        return;
    }

    targetMapping.bitrates.push({
        bitrate: bitrate,
        bitrateIndex: bitrateIndex
    });
}

function prepareResolutionMapping(bitrates, qualityMapping) {
    bitrates.forEach(function (bitrateInfo) {
        return setResolution(bitrateInfo.bitrate, bitrateInfo.index, qualityMapping);
    });
    return bitrates;
}

function prepareResolutionOption(element, mapping) {
    var qualityOption = element;

    if (!mapping.resolution) {
        console.error('Qualitymapping is missing a resolution-value', mapping);
    }

    qualityOption.textContent = mapping.resolution;
    qualityOption.mapping = mapping;
}

function selectResolution(qualityMapping, index) {
    var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    qualityMapping.forEach(function (mapping) {
        if (!mapping.option) {
            return;
        }

        var hasBitrate = !!mapping.bitrates.find(function (bitrate) {
            return bitrate.bitrateIndex === index;
        });
        if (hasBitrate) {
            mapping.option.selected.classList.add('icon_icCheck');
        } else {
            mapping.option.selected.classList.remove('icon_icCheck');
        }
    });

    return silent ? null : index;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SeekbarPreview = function (_BaseElement) {
    _inherits(SeekbarPreview, _BaseElement);

    function SeekbarPreview(meister) {
        _classCallCheck(this, SeekbarPreview);

        var _this = _possibleConstructorReturn(this, (SeekbarPreview.__proto__ || Object.getPrototypeOf(SeekbarPreview)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-seek-bar-preview', 'no-preview');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.seekBarPreviewImage = document.createElement('img');
        _this.classListAdd(_this.seekBarPreviewImage, 'pf-seek-bar-preview-image');
        _this.seekBarPreviewImage.src = '';
        _this.element.appendChild(_this.seekBarPreviewImage);

        _this.seekBarPreviewTime = document.createElement('span');
        _this.seekBarPreviewTime.textContent = '0:00';
        _this.classListAdd(_this.seekBarPreviewTime, 'pf-seek-bar-preview-time');
        _this.element.appendChild(_this.seekBarPreviewTime);

        _this.images = [];

        _this.on('itemTimeInfo', function (timeInfo) {
            return _this.onItemTimeInfo(timeInfo);
        });

        _this.on('itemImagestream', function (info) {
            _this.images = info.images;
            _this.classListRemove(_this.element, 'no-preview');
        });
        return _this;
    }

    _createClass(SeekbarPreview, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.isLive = false;
            this.modifiedDuration = null;
            // Reset filmstrip
            this.images = [];
            this.classListAdd(this.element, 'no-preview');
        }
    }, {
        key: 'onItemTimeInfo',
        value: function onItemTimeInfo(timeInfo) {
            // Special case for DASH dvr
            if (timeInfo.isLive) {
                this.isLive = true;
                this.modifiedDuration = timeInfo.duration;
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.classListRemove(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'update',
        value: function update(percentage) {
            var offsetWidth = this.element.offsetWidth;
            var offsetParentWidth = this.element.offsetParent.offsetWidth;
            var rightBoundary = offsetParentWidth - offsetWidth;

            // Calculate how much the preview needs to move to the right.
            var pixelsRight = offsetParentWidth * percentage - offsetWidth / 2;

            // Make it stay within the player.
            if (pixelsRight < 0) {
                pixelsRight = 0;
            } else if (pixelsRight > rightBoundary) {
                pixelsRight = rightBoundary;
            }

            this.element.style.transform = 'translate(' + pixelsRight + 'px)';

            var time = (this.modifiedDuration || this.meister.duration) * percentage;
            this.seekBarPreviewImage.src = this.getImageByTime(time);

            if (this.modifiedDuration) {
                time = this.modifiedDuration - time;
                var timeString = this.meister.utils.timeToHMS(Math.round(time));
                this.seekBarPreviewTime.textContent = '-' + timeString;
            } else {
                this.seekBarPreviewTime.textContent = this.meister.utils.timeToHMS(Math.round(time));
            }
        }
    }, {
        key: 'getImageByTime',
        value: function getImageByTime(time) {
            if (this.images.length === 0) {
                return '';
            }

            for (var i = 0; i < this.images.length; i++) {
                var image = this.images[i];

                if (image.start <= time && image.end >= time) {
                    return image.src;
                }
            }

            return this.images[this.images.length - 1].src;
        }
    }]);

    return SeekbarPreview;
}(_BaseElement3.default);

exports.default = SeekbarPreview;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginSpace = function (_BaseElement) {
    _inherits(PluginSpace, _BaseElement);

    function PluginSpace(meister, controls) {
        _classCallCheck(this, PluginSpace);

        var _this = _possibleConstructorReturn(this, (PluginSpace.__proto__ || Object.getPrototypeOf(PluginSpace)).call(this, meister));

        _this.controls = controls;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-plugin-overlay');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        // Stop the click event so the player won't play/pause.
        _this.element.addEventListener('click', function (e) {
            var clickEvent = e || event;
            clickEvent.stopPropagation();
        });

        _this.closeButton = document.createElement('div');
        _this.classListAdd(_this.closeButton, 'pf-ui-element-active', 'pf-plugin-overlay-close-button');
        _this.closeButton.innerHTML = '✖︎';
        _this.closeButton.addEventListener('click', _this.closeSpace.bind(_this));

        _this.element.appendChild(_this.closeButton);

        _this.on('uiPluginOpen', _this.onPluginOpen.bind(_this));
        return _this;
    }

    _createClass(PluginSpace, [{
        key: 'closeSpace',
        value: function closeSpace() {
            this.meister.trigger('uiPluginClose');
            this.classListAdd(this.element, 'pf-ui-element-hidden');
        }
    }, {
        key: 'onPluginOpen',
        value: function onPluginOpen() {
            this.classListRemove(this.element, 'pf-ui-element-hidden');
        }
    }]);

    return PluginSpace;
}(_BaseElement3.default);

exports.default = PluginSpace;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_BaseElement) {
    _inherits(Preview, _BaseElement);

    function Preview(meister) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-preview');

        _this.info = document.createElement('div');
        _this.classListAdd(_this.info, 'pf-preview-info');

        _this.infoTitle = document.createElement('span');
        _this.info.appendChild(_this.infoTitle);
        _this.infoDescription = document.createElement('span');
        _this.info.appendChild(_this.infoDescription);

        _this.playButton = document.createElement('div');

        // HACK: The first time itemUnloaded is always called.
        // This prevents the preview from showing correctly.
        _this.isLoaded = false;

        _this.classListAdd(_this.playButton, 'pf-preview-play-button', 'pf-ui-element-active', 'pf-ui-element-hidden');
        _this.classListAdd(_this.playButton, 'icon', 'icon_icPlay');

        _this.element.appendChild(_this.info);
        _this.element.appendChild(_this.playButton);

        _this.on('uiEvent', function (e) {
            if (e.type === 'splash') {
                _this.classListRemove(_this.element, 'pf-ui-element-hidden');

                if (!e.info) return;

                if (e.info.thumbnailURL) {
                    _this.element.style['background-image'] = 'url(' + e.info.thumbnailURL + ')';
                }

                if (e.info.title) {
                    _this.infoTitle.innerHTML = e.info.title + '<br><br>';
                }

                if (e.info.description) {
                    _this.infoDescription.textContent = e.info.description;
                }
            }
        });

        _this.on('itemLoaded', function () {
            return _this.classListRemove(_this.playButton, 'pf-ui-element-hidden');
        });

        _this.element.addEventListener('click', function (e) {
            var clickEvent = e || event;
            clickEvent.stopPropagation();

            _this.classListAdd(_this.element, 'pf-ui-element-hidden');
            _this.meister.play();
        });

        _this.on('playerPlay', function () {
            _this.classListAdd(_this.element, 'pf-ui-element-hidden');
        });
        return _this;
    }

    _createClass(Preview, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            if (!this.isLoaded) {
                this.isLoaded = true;
                return;
            }

            this.element.style['background-image'] = '';
            this.infoTitle.innerHTML = '';
            this.infoDescription.textContent = '';
        }
    }]);

    return Preview;
}(_BaseElement3.default);

exports.default = Preview;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_BaseElement) {
    _inherits(Spinner, _BaseElement);

    function Spinner(meister) {
        _classCallCheck(this, Spinner);

        var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, meister));

        _this.meister = meister;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-spinner-wrapper');

        _this.spinner = document.createElement('div');
        _this.classListAdd(_this.spinner, 'pf-spinner-loading');
        _this.element.appendChild(_this.spinner);

        _this.spinnerMessage = document.createElement('div');
        _this.classListAdd(_this.spinnerMessage, 'pf-spinner-message');
        _this.element.appendChild(_this.spinnerMessage);

        // Register events.
        _this.on('playerBufferedEnough', function () {
            return _this.hideSpinner(true);
        });
        _this.on('playerPause', function () {
            return _this.hideSpinner();
        });
        _this.on('itemUnloaded', function () {
            return _this.hideSpinner();
        });
        _this.on('playerPlay', function () {
            return _this.hideSpinner();
        });
        _this.on('showLoading', function (e) {
            return _this.showSpinner(e);
        });
        _this.on('hideLoading', function () {
            return _this.hideSpinner();
        });
        return _this;
    }

    _createClass(Spinner, [{
        key: 'showSpinner',
        value: function showSpinner(e) {
            this.classListRemove(this.element, 'hidden');
            this.classListRemove(this.spinner, 'hidden');

            if (e && e.message) {
                this.spinnerMessage.innerHTML = e.message;
                this.classListRemove(this.spinnerMessage, 'hidden');
            } else if (e && e.code) {
                this.spinnerMessage.innerHTML = this.meister.Localization.get(e.code);
                this.classListRemove(this.spinnerMessage, 'hidden');
            }
        }
    }, {
        key: 'hideSpinner',
        value: function hideSpinner(fromBuffering) {
            // HACK quick fix so other hides don't hide buffering indicator
            if (this.spinnerMessage.innerHTML === 'Buffering...' && !fromBuffering) {
                return;
            }

            this.classListAdd(this.element, 'hidden');
            this.classListAdd(this.spinner, 'hidden');
            this.classListAdd(this.spinnerMessage, 'hidden');
        }
    }]);

    return Spinner;
}(_BaseElement3.default);

exports.default = Spinner;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginButton = function (_BaseElement) {
    _inherits(PluginButton, _BaseElement);

    function PluginButton(name, icon, meister) {
        _classCallCheck(this, PluginButton);

        var _this = _possibleConstructorReturn(this, (PluginButton.__proto__ || Object.getPrototypeOf(PluginButton)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active', 'pf-plugin-overlay-open-button');

        // TODO: Make this clever
        _this.element.innerHTML = icon;
        _this.name = name;

        _this.element.addEventListener('click', function () {
            _this.meister.trigger('uiPluginOpen', {
                name: _this.name
            });
        });
        return _this;
    }

    return PluginButton;
}(_BaseElement3.default);

exports.default = PluginButton;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitleDisplay = function (_BaseElement) {
    _inherits(TitleDisplay, _BaseElement);

    function TitleDisplay(meister) {
        _classCallCheck(this, TitleDisplay);

        var _this = _possibleConstructorReturn(this, (TitleDisplay.__proto__ || Object.getPrototypeOf(TitleDisplay)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-wrapper-left', 'pf-title');

        _this.title = '';
        _this.element.innerHTML = _this.title;

        _this.on('itemMetadata', function (metadata) {
            return _this.onItemMetadata(metadata);
        });
        return _this;
    }

    _createClass(TitleDisplay, [{
        key: 'onItemUnloaded',
        value: function onItemUnloaded() {
            this.title = '';
            this.element.innerHTML = this.title;
        }
    }, {
        key: 'onItemMetadata',
        value: function onItemMetadata(metadata) {
            var title = metadata.title;
            if (typeof title === 'string' || title instanceof String) {
                this.title = metadata.title;
                this.element.innerHTML = this.title;
            }
        }
    }]);

    return TitleDisplay;
}(_BaseElement3.default);

exports.default = TitleDisplay;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TitleDisplay = __webpack_require__(30);

var _TitleDisplay2 = _interopRequireDefault(_TitleDisplay);

var _CastButton = __webpack_require__(10);

var _CastButton2 = _interopRequireDefault(_CastButton);

var _BaseElement2 = __webpack_require__(0);

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

var _PluginButton = __webpack_require__(29);

var _PluginButton2 = _interopRequireDefault(_PluginButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_BaseElement) {
    _inherits(TopBar, _BaseElement);

    function TopBar(config, meister) {
        _classCallCheck(this, TopBar);

        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'top');

        // Construct and append top left half.
        _this.titleDisplay = new _TitleDisplay2.default(meister);
        _this.element.appendChild(_this.titleDisplay.getNode());

        // Construct top right half.
        _this.topRightWrapper = document.createElement('div');
        _this.classListAdd(_this.topRightWrapper, 'pf-ui-wrapper-right');

        if (!_this.config.castButton || !_this.config.castButton.hide) {
            _this.castButton = new _CastButton2.default(meister);
            _this.topRightWrapper.appendChild(_this.castButton.getNode());
        }

        // Append top right half
        _this.element.appendChild(_this.topRightWrapper);

        // Hide/show on plugin overlay
        _this.on('uiPluginOpen', function () {
            return _this.onPluginOpen();
        });
        _this.on('uiPluginClose', function () {
            return _this.onPluginClose();
        });

        // Listen for plugins that want to add buttons.
        _this.on('uiPluginInserted', function (info) {
            return _this.insertPlugin(info);
        });

        // Clicks inside the control bars shouldn't play/pause the player.
        _this.element.addEventListener('click', function (e) {
            var clickEvent = e || event;
            clickEvent.stopPropagation();
        });
        return _this;
    }

    _createClass(TopBar, [{
        key: 'onPluginOpen',
        value: function onPluginOpen() {
            this.classListAdd(this.element, 'pf-ui-overlay-active');
        }
    }, {
        key: 'onPluginClose',
        value: function onPluginClose() {
            this.classListRemove(this.element, 'pf-ui-overlay-active');
        }
    }, {
        key: 'insertPlugin',
        value: function insertPlugin(info) {
            // TODO: Make the placement smart.
            var newPlugin = new _PluginButton2.default(info.name, info.icon, this.meister);
            this.topRightWrapper.appendChild(newPlugin.getNode());
        }
    }]);

    return TopBar;
}(_BaseElement3.default);

exports.default = TopBar;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.classListAdd = classListAdd;
exports.classListRemove = classListRemove;
function classListAdd(element) {
    for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classNames[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        element.classList.add(className);
    }
}

function classListRemove(element) {
    for (var _len2 = arguments.length, classNames = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        classNames[_key2 - 1] = arguments[_key2];
    }

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        element.classList.remove(className);
    }
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;charset=utf-8;base64,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"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;charset=utf-8;base64,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"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;charset=utf-8;base64,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"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;charset=utf-8;base64,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"

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'icons';\n  src: url(" + __webpack_require__(11) + ");\n  src: url(" + __webpack_require__(11) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(36) + ") format(\"woff\"), url(" + __webpack_require__(35) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Biryani';\n  src: url(" + __webpack_require__(33) + ") format(\"woff\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Biryani';\n  src: url(" + __webpack_require__(34) + ") format(\"woff\");\n  font-weight: 300;\n  font-style: normal; }\n\n.icon {\n  font-family: 'icons';\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  speak: none;\n  text-decoration: inherit;\n  text-transform: none;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon_icAirplay:before {\n  content: '\\F101'; }\n\n.icon_icCast:before {\n  content: '\\F102'; }\n\n.icon_icCc:before {\n  content: '\\F103'; }\n\n.icon_icCheck:before {\n  content: '\\F104'; }\n\n.icon_icFullscreen:before {\n  content: '\\F105'; }\n\n.icon_icFullscreenExit:before {\n  content: '\\F106'; }\n\n.icon_icHd:before {\n  content: '\\F107'; }\n\n.icon_icLanguage:before {\n  content: '\\F108'; }\n\n.icon_icMore:before {\n  content: '\\F109'; }\n\n.icon_icNext:before {\n  content: '\\F10A'; }\n\n.icon_icPause:before {\n  content: '\\F10B'; }\n\n.icon_icStepForward:before {\n  content: '\\E966'; }\n\n.icon_icPlay:before {\n  content: '\\F10C'; }\n\n.icon_icStepBackward:before {\n  content: '\\E965'; }\n\n.icon_icPrev:before {\n  content: '\\F10D'; }\n\n.icon_icShare:before {\n  content: '\\E900'; }\n\n.icon_icSettings:before {\n  content: '\\F10E'; }\n\n.icon_icVol0:before {\n  content: '\\F10F'; }\n\n.icon_icVol1:before {\n  content: '\\F110'; }\n\n.icon_icVol2:before {\n  content: '\\F111'; }\n\n.icon_icVol3:before {\n  content: '\\F112'; }\n\n.pf-player-container {\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  display: inherit;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  font-family: \"Arial\";\n  overflow: hidden; }\n  .pf-player-container:focus {\n    border: none;\n    outline-width: 0; }\n  .pf-player-container .pf-default-wrapper {\n    background-color: black;\n    position: relative;\n    width: 100%;\n    height: 100%; }\n  .pf-player-container .pf-player, .pf-player-container .pf-player video {\n    width: 100%;\n    height: 100%;\n    display: inherit; }\n  .pf-player-container .pf-ads {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .pf-player-container .pf-controls {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px; }\n\n.pf-controls-wrapper {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.pf-preview {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.pf-preview-info {\n  position: absolute;\n  width: 75%;\n  top: 20%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -70%);\n  transform: translate(-50%, -70%);\n  font-family: 'Arial';\n  font-size: 15px;\n  text-align: center;\n  color: white; }\n  .pf-preview-info span {\n    padding-left: 5px;\n    padding-right: 5px; }\n\n.pf-preview-play-button {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  font-size: 100px;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.pf-control-bar {\n  position: absolute;\n  height: 36px;\n  width: 100%;\n  -webkit-animation: show-bars-animation 0.4s forwards;\n  -moz-animation: show-bars-animation 0.4s forwards;\n  -ms-animation: show-bars-animation 0.4s forwards;\n  -o-animation: show-bars-animation 0.4s forwards;\n  animation: show-bars-animation 0.4s forwards; }\n  .pf-control-bar.top {\n    top: 0;\n    background: linear-gradient(to bottom, black, transparent); }\n    .pf-control-bar.top.hidden {\n      -webkit-animation: hide-bars-animation 0.4s forwards;\n      -moz-animation: hide-bars-animation 0.4s forwards;\n      -ms-animation: hide-bars-animation 0.4s forwards;\n      -o-animation: hide-bars-animation 0.4s forwards;\n      animation: hide-bars-animation 0.4s forwards; }\n  .pf-control-bar.bottom {\n    bottom: 0;\n    background: linear-gradient(to top, black, transparent); }\n    .pf-control-bar.bottom.hidden {\n      -webkit-animation: hide-bars-animation 0.4s forwards;\n      -moz-animation: hide-bars-animation 0.4s forwards;\n      -ms-animation: hide-bars-animation 0.4s forwards;\n      -o-animation: hide-bars-animation 0.4s forwards;\n      animation: hide-bars-animation 0.4s forwards; }\n  .pf-control-bar.pf-mobile {\n    height: 55px; }\n\n:-webkit-full-screen .pf-control-bar {\n  height: 45px; }\n\n:-moz-full-screen .pf-control-bar {\n  height: 45px; }\n\n:-ms-fullscreen .pf-control-bar {\n  height: 45px; }\n\n:fullscreen .pf-control-bar {\n  height: 45px; }\n\n@-webkit-keyframes show-bars-animation {\n  0% {\n    width: 0;\n    opacity: 0; }\n  1% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 100%;\n    opacity: 1; } }\n\n@-moz-keyframes show-bars-animation {\n  0% {\n    width: 0;\n    opacity: 0; }\n  1% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 100%;\n    opacity: 1; } }\n\n@-ms-keyframes show-bars-animation {\n  0% {\n    width: 0;\n    opacity: 0; }\n  1% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 100%;\n    opacity: 1; } }\n\n@-o-keyframes show-bars-animation {\n  0% {\n    width: 0;\n    opacity: 0; }\n  1% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 100%;\n    opacity: 1; } }\n\n@keyframes show-bars-animation {\n  0% {\n    width: 0;\n    opacity: 0; }\n  1% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 100%;\n    opacity: 1; } }\n\n@-webkit-keyframes hide-bars-animation {\n  0% {\n    width: 100%;\n    opacity: 1; }\n  99% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 0;\n    opacity: 0; } }\n\n@-moz-keyframes hide-bars-animation {\n  0% {\n    width: 100%;\n    opacity: 1; }\n  99% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 0;\n    opacity: 0; } }\n\n@-ms-keyframes hide-bars-animation {\n  0% {\n    width: 100%;\n    opacity: 1; }\n  99% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 0;\n    opacity: 0; } }\n\n@-o-keyframes hide-bars-animation {\n  0% {\n    width: 100%;\n    opacity: 1; }\n  99% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 0;\n    opacity: 0; } }\n\n@keyframes hide-bars-animation {\n  0% {\n    width: 100%;\n    opacity: 1; }\n  99% {\n    width: 100%;\n    opacity: 0.01; }\n  100% {\n    width: 0;\n    opacity: 0; } }\n\n.pf-ui-element {\n  margin-top: 10px;\n  padding-left: 3px;\n  padding-right: 3px;\n  color: white;\n  line-height: 23px;\n  font-size: 23px; }\n  .pf-ui-element-left {\n    float: left; }\n  .pf-ui-element-right {\n    float: right; }\n  .pf-ui-element.pf-mobile {\n    padding-left: 6px;\n    padding-right: 6px;\n    line-height: 40px;\n    font-size: 40px; }\n\n:-webkit-full-screen .pf-ui-element.pf-mobile {\n  line-height: 30px;\n  font-size: 30px; }\n\n:-moz-full-screen .pf-ui-element.pf-mobile {\n  line-height: 30px;\n  font-size: 30px; }\n\n:-ms-fullscreen .pf-ui-element.pf-mobile {\n  line-height: 30px;\n  font-size: 30px; }\n\n:fullscreen .pf-ui-element.pf-mobile {\n  line-height: 30px;\n  font-size: 30px; }\n\n.pf-ui-element-active {\n  cursor: pointer;\n  pointer-events: all;\n  color: #f0f0f0;\n  -webkit-tap-highlight-color: transparent; }\n  .pf-ui-element-active:hover {\n    color: white; }\n\n.pf-ui-element-inactive {\n  cursor: auto;\n  pointer-events: none;\n  color: grey; }\n\n.pf-ui-wrapper-left {\n  float: left;\n  height: 100%; }\n  .pf-ui-wrapper-left:first-child {\n    padding-left: 2%; }\n\n.pf-ui-wrapper-right {\n  float: right;\n  height: 100%; }\n  .pf-ui-wrapper-right:last-child {\n    padding-right: 2%; }\n\n.pf-ui-element-hidden {\n  visibility: hidden !important;\n  width: 0px !important; }\n\n.pf-ui-overlay-active {\n  visibility: hidden !important;\n  width: 0px !important; }\n\n.pf-title {\n  width: 65%;\n  font-size: 15px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  user-select: text;\n  -ms-user-select: text;\n  -moz-user-select: text;\n  -webkit-user-select: text; }\n  .pf-title.pf-mobile {\n    font-size: 15px;\n    line-height: 40px; }\n\n.pf-time-display {\n  pointer-events: none;\n  font-size: 10px; }\n  .pf-time-display.microsoft-hack {\n    pointer-events: auto; }\n  .pf-time-display.pf-mobile {\n    font-size: 20px; }\n\n:-webkit-full-screen .pf-time-display.pf-mobile {\n  font-size: 15px; }\n\n:-moz-full-screen .pf-time-display.pf-mobile {\n  font-size: 15px; }\n\n:-ms-fullscreen .pf-time-display.pf-mobile {\n  font-size: 15px; }\n\n:fullscreen .pf-time-display.pf-mobile {\n  font-size: 15px; }\n\n.time-display-element {\n  padding: 2px; }\n  .time-display-element.go-live {\n    font-weight: bold;\n    text-decoration: underline; }\n\n.pf-seek-bar-wrapper {\n  width: 100%;\n  position: absolute;\n  height: 5px; }\n  .pf-seek-bar-wrapper.pf-mobile {\n    height: 10px;\n    top: -5px; }\n\n.pf-seek-bar-padding {\n  width: 96%;\n  height: 5px;\n  margin-left: 2%;\n  position: absolute;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent; }\n  .pf-seek-bar-padding:hover {\n    height: 15px;\n    top: -7px; }\n  .pf-seek-bar-padding.pf-mobile {\n    height: 30px;\n    top: -10px; }\n\n.pf-seek-bar {\n  width: 96%;\n  height: 5px;\n  position: absolute;\n  margin-left: 2%;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  border-radius: 10px;\n  -webkit-transform-origin: left;\n  transform-origin: left;\n  border-radius: 10px;\n  pointer-events: none; }\n  .pf-seek-bar.duration {\n    background-color: rgba(128, 128, 128, 0.6); }\n  .pf-seek-bar.buffered {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .pf-seek-bar.highlight {\n    background-color: rgba(255, 255, 255, 0.6); }\n    .pf-seek-bar.highlight.pf-mobile {\n      display: none; }\n  .pf-seek-bar.fill {\n    background-color: rgba(255, 255, 255, 0.8); }\n\n.pf-seek-bar-figure {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  margin-top: -3px;\n  margin-left: -5px;\n  background-color: white;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -ms-border-radius: 50%;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 2; }\n\n.pf-seek-bar-point {\n  width: 5px;\n  height: 5px;\n  margin-left: -3px;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1; }\n\n.pf-seek-bar-preview {\n  width: 120px;\n  height: 69px;\n  position: absolute;\n  color: white;\n  background-color: black;\n  margin-top: -75px;\n  left: 0;\n  display: block;\n  pointer-events: none; }\n  .pf-seek-bar-preview.no-preview {\n    background-color: transparent; }\n\n.pf-seek-bar-preview-image {\n  width: 100%;\n  position: absolute;\n  padding: 1px; }\n  .pf-seek-bar-preview-image[src=\"\"] {\n    display: none; }\n\n.pf-seek-bar-preview-time {\n  background-color: rgba(0, 0, 0, 0.7);\n  font-size: 10px;\n  padding: 4px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0; }\n\n.pf-volume-button {\n  float: left;\n  margin-right: 4px; }\n\n.pf-volume-slider-wrapper {\n  height: 20px;\n  float: left;\n  -webkit-tap-highlight-color: transparent; }\n  .pf-volume-slider-wrapper.pf-mobile {\n    display: none; }\n\n.pf-volume-slider {\n  height: 3px;\n  position: relative;\n  top: 10px;\n  pointer-events: none; }\n  .pf-volume-slider.open {\n    -webkit-animation: open-volume-animation 0.4s forwards;\n    -moz-animation: open-volume-animation 0.4s forwards;\n    -ms-animation: open-volume-animation 0.4s forwards;\n    -o-animation: open-volume-animation 0.4s forwards;\n    animation: open-volume-animation 0.4s forwards; }\n  .pf-volume-slider.close {\n    -webkit-animation: close-volume-animation 0.4s forwards;\n    -moz-animation: close-volume-animation 0.4s forwards;\n    -ms-animation: close-volume-animation 0.4s forwards;\n    -o-animation: close-volume-animation 0.4s forwards;\n    animation: close-volume-animation 0.4s forwards; }\n\n.pf-volume-slider-fill {\n  height: 100%;\n  width: 100%;\n  transform-origin: left;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  -ms-border-radius: 10px;\n  border-radius: 10px;\n  background-color: white; }\n\n.pf-volume-slider-figure {\n  width: 3px;\n  height: 10px;\n  position: absolute;\n  top: -3.5px;\n  margin-left: -2px;\n  background-color: white; }\n\n@-webkit-keyframes open-volume-animation {\n  0% {\n    width: 0px;\n    opacity: 0; }\n  100% {\n    width: 30px;\n    opacity: 1; } }\n\n@-moz-keyframes open-volume-animation {\n  0% {\n    width: 0px;\n    opacity: 0; }\n  100% {\n    width: 30px;\n    opacity: 1; } }\n\n@-ms-keyframes open-volume-animation {\n  0% {\n    width: 0px;\n    opacity: 0; }\n  100% {\n    width: 30px;\n    opacity: 1; } }\n\n@-o-keyframes open-volume-animation {\n  0% {\n    width: 0px;\n    opacity: 0; }\n  100% {\n    width: 30px;\n    opacity: 1; } }\n\n@keyframes open-volume-animation {\n  0% {\n    width: 0px;\n    opacity: 0; }\n  100% {\n    width: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes close-volume-animation {\n  0% {\n    width: 30px;\n    opacity: 1; }\n  100% {\n    width: 0px;\n    opacity: 0; } }\n\n@-moz-keyframes close-volume-animation {\n  0% {\n    width: 30px;\n    opacity: 1; }\n  100% {\n    width: 0px;\n    opacity: 0; } }\n\n@-ms-keyframes close-volume-animation {\n  0% {\n    width: 30px;\n    opacity: 1; }\n  100% {\n    width: 0px;\n    opacity: 0; } }\n\n@-o-keyframes close-volume-animation {\n  0% {\n    width: 30px;\n    opacity: 1; }\n  100% {\n    width: 0px;\n    opacity: 0; } }\n\n@keyframes close-volume-animation {\n  0% {\n    width: 30px;\n    opacity: 1; }\n  100% {\n    width: 0px;\n    opacity: 0; } }\n\n.pf-quality-selector {\n  font-family: 'Arial';\n  font-size: 10px;\n  position: absolute;\n  bottom: 40px;\n  right: 10px;\n  width: auto;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  -ms-border-radius: 3px;\n  border-radius: 3px;\n  background-color: rgba(37, 37, 37, 0.7);\n  max-height: calc(100% - 50px);\n  height: auto;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-animation: open-menu-animation 0.4s forwards;\n  -moz-animation: open-menu-animation 0.4s forwards;\n  -ms-animation: open-menu-animation 0.4s forwards;\n  -o-animation: open-menu-animation 0.4s forwards;\n  animation: open-menu-animation 0.4s forwards;\n  z-index: 2000; }\n  .pf-quality-selector.hidden {\n    -webkit-animation: close-menu-animation 0.4s forwards;\n    -moz-animation: close-menu-animation 0.4s forwards;\n    -ms-animation: close-menu-animation 0.4s forwards;\n    -o-animation: close-menu-animation 0.4s forwards;\n    animation: close-menu-animation 0.4s forwards; }\n  .pf-quality-selector.pf-mobile {\n    font-size: 20px; }\n\n.pf-quality-option {\n  color: #fff;\n  padding: 10px;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  border-bottom-color: rgba(255, 255, 255, 0.7);\n  width: 100%; }\n  .pf-quality-option:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .pf-quality-option:last-child {\n    border: none;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .pf-quality-option:hover {\n    background-color: #252525; }\n\n.pf-quality-option-select {\n  float: right;\n  font-size: 20px;\n  margin-top: -5px;\n  line-height: 1em;\n  margin-right: 15px; }\n  .pf-quality-option-select.pf-mobile {\n    margin-top: 5px;\n    font-size: 30px;\n    margin-top: -4px; }\n\n:-webkit-full-screen .pf-quality-option-select.pf-mobile {\n  margin-top: 0px; }\n\n:-moz-full-screen .pf-quality-option-select.pf-mobile {\n  margin-top: 0px; }\n\n:-ms-fullscreen .pf-quality-option-select.pf-mobile {\n  margin-top: 0px; }\n\n:fullscreen .pf-quality-option-select.pf-mobile {\n  margin-top: 0px; }\n\n@-webkit-keyframes open-menu-animation {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes open-menu-animation {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes open-menu-animation {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes open-menu-animation {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes open-menu-animation {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes close-menu-animation {\n  0% {\n    opacity: 1; }\n  100% {\n    height: 0px;\n    opacity: 0; } }\n\n@-moz-keyframes close-menu-animation {\n  0% {\n    opacity: 1; }\n  100% {\n    height: 0px;\n    opacity: 0; } }\n\n@-ms-keyframes close-menu-animation {\n  0% {\n    opacity: 1; }\n  100% {\n    height: 0px;\n    opacity: 0; } }\n\n@-o-keyframes close-menu-animation {\n  0% {\n    opacity: 1; }\n  100% {\n    height: 0px;\n    opacity: 0; } }\n\n@keyframes close-menu-animation {\n  0% {\n    opacity: 1; }\n  100% {\n    height: 0px;\n    opacity: 0; } }\n\n.pf-ad-controls {\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  bottom: 0;\n  background-color: rgba(128, 128, 128, 0.3);\n  box-shadow: 0px 0px 4px #252525;\n  z-index: 2; }\n\n.pf-extra-ad-controls {\n  height: 36px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  padding-top: 10px;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent); }\n\n.pf-ad-progress-bar-fill {\n  height: 100%;\n  width: 100%;\n  transform-origin: left;\n  background-color: white;\n  pointer-events: none; }\n\n.pf-ad-info-view {\n  position: absolute;\n  bottom: 10px;\n  left: 5px;\n  font-size: 10px;\n  font-weight: 200;\n  color: white; }\n\n.pf-ad-count {\n  display: inline-block;\n  padding-right: 5px;\n  text-shadow: 1px 1px 1px #252525; }\n\n.pf-ad-countdown {\n  display: inline-block;\n  text-shadow: 1px 1px 1px #252525; }\n\n.pf-ad-point {\n  background-color: orange; }\n\n.pf-ad-fullscreen {\n  padding-right: 6px; }\n\n.pf-ad-controls-shown-animation {\n  display: block;\n  -webkit-animation: show-ad-controls 0.4s forwards;\n  -moz-animation: show-ad-controls 0.4s forwards;\n  -ms-animation: show-ad-controls 0.4s forwards;\n  -o-animation: show-ad-controls 0.4s forwards;\n  animation: show-ad-controls 0.4s forwards; }\n\n.pf-ad-controls-hide-animation {\n  display: block;\n  -webkit-animation: hide-ad-controls 0.4s forwards;\n  -moz-animation: hide-ad-controls 0.4s forwards;\n  -ms-animation: hide-ad-controls 0.4s forwards;\n  -o-animation: hide-ad-controls 0.4s forwards;\n  animation: hide-ad-controls 0.4s forwards; }\n\n.pf-ad-controls-move-up {\n  -webkit-animation: controls-move-up 0.4s forwards;\n  -moz-animation: controls-move-up 0.4s forwards;\n  -ms-animation: controls-move-up 0.4s forwards;\n  -o-animation: controls-move-up 0.4s forwards;\n  animation: controls-move-up 0.4s forwards; }\n\n.pf-ad-controls-move-down {\n  -webkit-animation: controls-move-down 0.4s forwards;\n  -moz-animation: controls-move-down 0.4s forwards;\n  -ms-animation: controls-move-down 0.4s forwards;\n  -o-animation: controls-move-down 0.4s forwards;\n  animation: controls-move-down 0.4s forwards; }\n\n@-webkit-keyframes controls-move-up {\n  0% {\n    box-shadow: 0px 0px 4px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; } }\n\n@-moz-keyframes controls-move-up {\n  0% {\n    box-shadow: 0px 0px 4px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; } }\n\n@-ms-keyframes controls-move-up {\n  0% {\n    box-shadow: 0px 0px 4px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; } }\n\n@-o-keyframes controls-move-up {\n  0% {\n    box-shadow: 0px 0px 4px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; } }\n\n@keyframes controls-move-up {\n  0% {\n    box-shadow: 0px 0px 4px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; } }\n\n@-webkit-keyframes controls-move-down {\n  0% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; }\n  80% {\n    box-shadow: 0px 0px 2px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 4px #252525; } }\n\n@-moz-keyframes controls-move-down {\n  0% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; }\n  80% {\n    box-shadow: 0px 0px 2px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 4px #252525; } }\n\n@-ms-keyframes controls-move-down {\n  0% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; }\n  80% {\n    box-shadow: 0px 0px 2px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 4px #252525; } }\n\n@-o-keyframes controls-move-down {\n  0% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; }\n  80% {\n    box-shadow: 0px 0px 2px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 4px #252525; } }\n\n@keyframes controls-move-down {\n  0% {\n    box-shadow: 0px 0px 0px #252525;\n    margin-bottom: 30px; }\n  80% {\n    box-shadow: 0px 0px 2px #252525;\n    margin-bottom: 0px; }\n  100% {\n    box-shadow: 0px 0px 4px #252525; } }\n\n@-webkit-keyframes show-ad-controls {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes show-ad-controls {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes show-ad-controls {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes show-ad-controls {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes show-ad-controls {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes hide-ad-controls {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-moz-keyframes hide-ad-controls {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-ms-keyframes hide-ad-controls {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-o-keyframes hide-ad-controls {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes hide-ad-controls {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.pf-plugin-overlay-open-button {\n  font-size: 15px;\n  background-color: rgba(25, 35, 35, 0.7); }\n\n.pf-plugin-overlay {\n  position: absolute;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%; }\n\n.pf-plugin-overlay-close-button {\n  width: 30px;\n  height: 30px;\n  margin: 9px;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  text-align: center;\n  font-size: 23px; }\n\n.pf-spinner-loading {\n  position: absolute;\n  left: calc(50% - 35px);\n  top: calc(50% - 25px);\n  border-bottom: 6px solid rgba(255, 255, 255, 0.2);\n  border-left: 6px solid rgba(255, 255, 255, 0.2);\n  border-right: 6px solid rgba(255, 255, 255, 0.2);\n  border-top: 6px solid rgba(255, 255, 255, 0.9);\n  border-radius: 100%;\n  height: 50px;\n  width: 50px;\n  -webkit-animation: pf-spinner-rotate 1s infinite linear;\n  -moz-animation: pf-spinner-rotate 1s infinite linear;\n  -ms-animation: pf-spinner-rotate 1s infinite linear;\n  -o-animation: pf-spinner-rotate 1s infinite linear;\n  animation: pf-spinner-rotate 1s infinite linear; }\n  .pf-spinner-loading.hidden {\n    display: none; }\n\n.pf-spinner-wrapper.hidden {\n  display: none; }\n\n.pf-spinner-wrapper .pf-spinner-message {\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  position: absolute;\n  top: 63%;\n  text-align: center;\n  width: 100%; }\n  .pf-spinner-wrapper .pf-spinner-message.hidden {\n    display: none; }\n\n@-webkit-keyframes pf-spinner-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@-moz-keyframes pf-spinner-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@-ms-keyframes pf-spinner-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@-o-keyframes pf-spinner-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n@keyframes pf-spinner-rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\n.pf-audio-image {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: black;\n  background-size: contain;\n  width: 100%;\n  height: 100%; }\n\n.pf-error-message-plugin {\n  font-family: 'Biryani';\n  background-color: #011B34;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: none;\n  background-image: url(" + __webpack_require__(40) + ");\n  background-repeat: no-repeat;\n  background-position: 92% bottom; }\n  .pf-error-message-plugin .pf-error-wrapper {\n    padding: 3%; }\n    .pf-error-message-plugin .pf-error-wrapper h1, .pf-error-message-plugin .pf-error-wrapper h2, .pf-error-message-plugin .pf-error-wrapper span {\n      color: white; }\n    .pf-error-message-plugin .pf-error-wrapper h2 {\n      color: #f48c00;\n      font-weight: bold;\n      font-size: 1.2em;\n      margin-bottom: 0px; }\n    .pf-error-message-plugin .pf-error-wrapper span {\n      display: block; }\n    .pf-error-message-plugin .pf-error-wrapper .pf-error-message {\n      width: 72%; }\n  .pf-error-message-plugin .pf-error-code-wrapper {\n    font-weight: bold;\n    position: absolute;\n    bottom: 0;\n    padding: 3% 3% 2%; }\n    .pf-error-message-plugin .pf-error-code-wrapper .pf-error-code-title {\n      color: white;\n      text-transform: uppercase; }\n    .pf-error-message-plugin .pf-error-code-wrapper .pf-error-code {\n      color: white; }\n\n.pf-debug-overlay {\n  position: absolute;\n  top: 0;\n  color: white;\n  width: 100%;\n  display: none; }\n  .pf-debug-overlay .pf-debug-overlay-section {\n    width: 100%; }\n    .pf-debug-overlay .pf-debug-overlay-section .pf-debug-overlay-left {\n      background-color: rgba(0, 0, 0, 0.5);\n      float: left; }\n    .pf-debug-overlay .pf-debug-overlay-section .pf-debug-overlay-right {\n      background-color: rgba(0, 0, 0, 0.5);\n      float: right; }\n  .pf-debug-overlay canvas {\n    height: 50px;\n    width: 100%; }\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(38)(content, {"sourceMap":true});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./meister.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./meister.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSAiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaUlITjBZVzVrWVd4dmJtVTlJbTV2SWo4K0NqeHpkbWNnZDJsa2RHZzlJakl4TTNCNElpQm9aV2xuYUhROUlqSXlOWEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNakV6SURJeU5TSWdkbVZ5YzJsdmJqMGlNUzR4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajRLSUNBZ0lEd2hMUzBnUjJWdVpYSmhkRzl5T2lCVGEyVjBZMmdnTXprdU1TQW9NekUzTWpBcElDMGdhSFIwY0RvdkwzZDNkeTVpYjJobGJXbGhibU52WkdsdVp5NWpiMjB2YzJ0bGRHTm9JQzB0UGdvZ0lDQWdQSFJwZEd4bFBrMWxhWE4wWlhJZ1ZGWThMM1JwZEd4bFBnb2dJQ0FnUEdSbGMyTStRM0psWVhSbFpDQjNhWFJvSUZOclpYUmphQzQ4TDJSbGMyTStDaUFnSUNBOFpHVm1jejRLSUNBZ0lDQWdJQ0E4Y0c5c2VXZHZiaUJwWkQwaWNHRjBhQzB4SWlCd2IybHVkSE05SWpBdU15QXhNRGNnTVRjd0xqY2dNVEEzSURFM01DNDNJREF1TnpVZ01DNHpJREF1TnpVaVBqd3ZjRzlzZVdkdmJqNEtJQ0FnSUR3dlpHVm1jejRLSUNBZ0lEeG5JR2xrUFNKUVlXZGxMVEVpSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdJQ0FnSUR4bklHbGtQU0pOWldsemRHVnlMVlJXSWo0S0lDQWdJQ0FnSUNBZ0lDQWdQR2NnYVdROUlrZHliM1Z3TFRJaVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dhV1E5SW5SMklqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WnlCcFpEMGlUR0Y1WlhKZk1TSWdabWxzYkQwaUl6RkZNelUwUWlJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklHbGtQU0pIY205MWNDSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWpBeUxqTTFMREU1TVM0eU5TQk1NVEF1TmpVc01Ua3hMakkxSUVNMExqSTJMREU1TVM0eU5TQXdMREU0TnlBd0xERTRNQzQyTWpVZ1REQXNOVE11TVRJMUlFTXdMRFEyTGpjMUlEUXVNallzTkRJdU5TQXhNQzQyTlN3ME1pNDFJRXd5TURJdU16VXNOREl1TlNCRE1qQTRMamMwTERReUxqVWdNakV6TERRMkxqYzFJREl4TXl3MU15NHhNalVnVERJeE15d3hPREF1TmpJMUlFTXlNVE1zTVRnM0lESXdPQzQzTkN3eE9URXVNalVnTWpBeUxqTTFMREU1TVM0eU5TQk1NakF5TGpNMUxERTVNUzR5TlNCYUlFMHlNUzR6TERFM01DQk1NVGt4TGpjc01UY3dJRXd4T1RFdU55dzJNeTQzTlNCTU1qRXVNeXcyTXk0M05TQk1NakV1TXl3eE56QWdUREl4TGpNc01UY3dJRm9pSUdsa1BTSlRhR0Z3WlNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURXdOaTQxTERZekxqYzFJRU14TURNdU16QTFMRFl6TGpjMUlERXdNUzR4TnpVc05qSXVOamczTlNBNU9TNHdORFVzTmpBdU5UWXlOU0JET1RRdU56ZzFMRFUyTGpNeE1qVWdPVFF1TnpnMUxEUTVMamt6TnpVZ09Ua3VNRFExTERRMUxqWTROelVnVERFME1TNDJORFVzTXk0eE9EYzFJRU14TkRVdU9UQTFMQzB4TGpBMk1qVWdNVFV5TGpJNU5Td3RNUzR3TmpJMUlERTFOaTQxTlRVc015NHhPRGMxSUVNeE5qQXVPREUxTERjdU5ETTNOU0F4TmpBdU9ERTFMREV6TGpneE1qVWdNVFUyTGpVMU5Td3hPQzR3TmpJMUlFd3hNVE11T1RVMUxEWXdMalUyTWpVZ1F6RXhNUzQ0TWpVc05qSXVOamczTlNBeE1Ea3VOamsxTERZekxqYzFJREV3Tmk0MUxEWXpMamMxSUV3eE1EWXVOU3cyTXk0M05TQmFJaUJwWkQwaVUyaGhjR1VpUGp3dmNHRjBhRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWswMk5pNDFMRFl6TGpjMUlFTTJNeTR6TURVc05qTXVOelVnTmpFdU1UYzFMRFl5TGpZNE56VWdOVGt1TURRMUxEWXdMalUyTWpVZ1F6VTBMamM0TlN3MU5pNHpNVEkxSURVMExqYzROU3cwT1M0NU16YzFJRFU1TGpBME5TdzBOUzQyT0RjMUlFd3hNREV1TmpRMUxETXVNVGczTlNCRE1UQTFMamt3TlN3dE1TNHdOakkxSURFeE1pNHlPVFVzTFRFdU1EWXlOU0F4TVRZdU5UVTFMRE11TVRnM05TQkRNVEl3TGpneE5TdzNMalF6TnpVZ01USXdMamd4TlN3eE15NDRNVEkxSURFeE5pNDFOVFVzTVRndU1EWXlOU0JNTnpNdU9UVTFMRFl3TGpVMk1qVWdRemN4TGpneU5TdzJNaTQyT0RjMUlEWTVMalk1TlN3Mk15NDNOU0EyTmk0MUxEWXpMamMxSUV3Mk5pNDFMRFl6TGpjMUlGb2lJR2xrUFNKVGFHRndaUzFEYjNCNUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2c0Tnk0NE1EQXdNREFzSURNeExqZzNOVEF3TUNrZ2MyTmhiR1VvTFRFc0lERXBJSFJ5WVc1emJHRjBaU2d0T0RjdU9EQXdNREF3TENBdE16RXVPRGMxTURBd0tTQWlQand2Y0dGMGFENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazAwTWk0MkxESXlOU0JETXpZdU1qRXNNakkxSURNeExqazFMREl5TUM0M05TQXpNUzQ1TlN3eU1UUXVNemMxSUV3ek1TNDVOU3d4T1RNdU1USTFJRU16TVM0NU5Td3hPRFl1TnpVZ016WXVNakVzTVRneUxqVWdOREl1Tml3eE9ESXVOU0JETkRndU9Ua3NNVGd5TGpVZ05UTXVNalVzTVRnMkxqYzFJRFV6TGpJMUxERTVNeTR4TWpVZ1REVXpMakkxTERJeE5DNHpOelVnUXpVekxqSTFMREl5TUM0M05TQTBPQzQ1T1N3eU1qVWdOREl1Tml3eU1qVWdURFF5TGpZc01qSTFJRm9pSUdsa1BTSlRhR0Z3WlNJK1BDOXdZWFJvUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRURTNNQzQwTERJeU5TQkRNVFkwTGpBeExESXlOU0F4TlRrdU56VXNNakl3TGpjMUlERTFPUzQzTlN3eU1UUXVNemMxSUV3eE5Ua3VOelVzTVRrekxqRXlOU0JETVRVNUxqYzFMREU0Tmk0M05TQXhOalF1TURFc01UZ3lMalVnTVRjd0xqUXNNVGd5TGpVZ1F6RTNOaTQzT1N3eE9ESXVOU0F4T0RFdU1EVXNNVGcyTGpjMUlERTRNUzR3TlN3eE9UTXVNVEkxSUV3eE9ERXVNRFVzTWpFMExqTTNOU0JETVRneExqQTFMREl5TUM0M05TQXhOell1Tnprc01qSTFJREUzTUM0MExESXlOU0JNTVRjd0xqUXNNakkxSUZvaUlHbGtQU0pUYUdGd1pTSStQQzl3WVhSb1Bnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhuSUdsa1BTSlFZWFJvTFRjdEt5MVFZWFJvTFRjdEt5MVFZWFJvTFRjdFRXRnpheUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01qRXVNREF3TURBd0xDQTJNeTR3TURBd01EQXBJajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQRzFoYzJzZ2FXUTlJbTFoYzJzdE1pSWdabWxzYkQwaWQyaHBkR1VpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnpaU0I0YkdsdWF6cG9jbVZtUFNJamNHRjBhQzB4SWo0OEwzVnpaVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl0WVhOclBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QnBaRDBpVFdGemF5SStQQzluUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0c5c2VXeHBibVVnYVdROUlsQmhkR2d0TnlJZ2MzUnliMnRsUFNJak1VVXpOVFJDSWlCemRISnZhMlV0ZDJsa2RHZzlJallpSUhOMGNtOXJaUzFzYVc1bFkyRndQU0p5YjNWdVpDSWdjM1J5YjJ0bExXeHBibVZxYjJsdVBTSnliM1Z1WkNJZ2JXRnphejBpZFhKc0tDTnRZWE5yTFRJcElpQndiMmx1ZEhNOUlpMDJJRE01SURFNUxqY3hOREk0TlRjZ01UY2dORFV1TkRJNE5UY3hOQ0F6T1NBM01TNHhOREk0TlRjeElERTNJRGsyTGpnMU56RTBNamtnTXprZ01USXlMalUzTVRReU9TQXhOeUF4TkRndU1qZzFOekUwSURNNUlERTNOQ0F4TnlJK1BDOXdiMng1YkdsdVpUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIQnZiSGxzYVc1bElHbGtQU0pRWVhSb0xUY2lJSE4wY205clpUMGlJekZGTXpVMFFpSWdjM1J5YjJ0bExYZHBaSFJvUFNJMklpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJRzFoYzJzOUluVnliQ2dqYldGemF5MHlLU0lnY0c5cGJuUnpQU0l0TmlBMk5TQXhPUzQzTVRReU9EVTNJRFF6SURRMUxqUXlPRFUzTVRRZ05qVWdOekV1TVRReU9EVTNNU0EwTXlBNU5pNDROVGN4TkRJNUlEWTFJREV5TWk0MU56RTBNamtnTkRNZ01UUTRMakk0TlRjeE5DQTJOU0F4TnpRZ05ETWlQand2Y0c5c2VXeHBibVUrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh3YjJ4NWJHbHVaU0JwWkQwaVVHRjBhQzAzSWlCemRISnZhMlU5SWlNeFJUTTFORUlpSUhOMGNtOXJaUzEzYVdSMGFEMGlOaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbkp2ZFc1a0lpQnpkSEp2YTJVdGJHbHVaV3B2YVc0OUluSnZkVzVrSWlCdFlYTnJQU0oxY213b0kyMWhjMnN0TWlraUlIQnZhVzUwY3owaUxUWWdPVElnTVRrdU56RTBNamcxTnlBM01DQTBOUzQwTWpnMU56RTBJRGt5SURjeExqRTBNamcxTnpFZ056QWdPVFl1T0RVM01UUXlPU0E1TWlBeE1qSXVOVGN4TkRJNUlEY3dJREUwT0M0eU9EVTNNVFFnT1RJZ01UYzBJRGN3SWo0OEwzQnZiSGxzYVc1bFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lEd3ZaejRLUEM5emRtYysi"

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ })
/******/ ]);
//# sourceMappingURL=StandardUi.js.map