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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var BaseElement = function () {
    function BaseElement(meister) {
        var _this = this;

        classCallCheck(this, BaseElement);

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

    createClass(BaseElement, [{
        key: 'on',
        value: function on(hook, handler) {
            var _eventStore;

            (_eventStore = this.eventStore).push.apply(_eventStore, toConsumableArray(this.meister.on(hook, handler, this.constructor.name)));
        }
    }, {
        key: 'one',
        value: function one(hook, block, handler) {
            var _eventStore2;

            (_eventStore2 = this.eventStore).push.apply(_eventStore2, toConsumableArray(this.meister.one(hook, block, handler, this.constructor.name)));
        }
    }, {
        key: 'classListAdd',
        value: function classListAdd$$1() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            if (this.isMobile) args.push('pf-mobile');
            classListAdd.apply(undefined, args);
        }
    }, {
        key: 'classListRemove',
        value: function classListRemove$$1() {
            classListRemove.apply(undefined, arguments);
        }
    }, {
        key: 'getNode',
        value: function getNode() {
            return this.element;
        }
    }]);
    return BaseElement;
}();

var TitleDisplay = function (_BaseElement) {
    inherits(TitleDisplay, _BaseElement);

    function TitleDisplay(meister) {
        classCallCheck(this, TitleDisplay);

        var _this = possibleConstructorReturn(this, (TitleDisplay.__proto__ || Object.getPrototypeOf(TitleDisplay)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-left', 'pf-ui-wrapper-left', 'pf-title');

        _this.title = '';
        _this.element.innerHTML = _this.title;

        _this.on('itemMetadata', function (metadata) {
            return _this.onItemMetadata(metadata);
        });
        return _this;
    }

    createClass(TitleDisplay, [{
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
}(BaseElement);

var index = noop;

// no operation
// null -> null
function noop() {}

var Canvas = function () {
    function Canvas(meister) {
        classCallCheck(this, Canvas);

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = meister.container.offsetWidth;
        this.canvas.height = meister.container.offsetHeight;

        // meister.container.appendChild(this.canvas);
        this.meister = meister;
    }

    createClass(Canvas, [{
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

var CastButton = function (_BaseElement) {
    inherits(CastButton, _BaseElement);

    function CastButton(meister) {
        classCallCheck(this, CastButton);

        var _this = possibleConstructorReturn(this, (CastButton.__proto__ || Object.getPrototypeOf(CastButton)).call(this, meister));

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active', 'pf-ui-element-hidden');
        _this.classListAdd(_this.element, 'icon');

        _this.onClick = index;

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

            _this.canvasVideo = new Canvas(meister);
        });

        _this.element.addEventListener('click', function () {
            return _this.onClick();
        });
        return _this;
    }

    createClass(CastButton, [{
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

                        self.onClick = index;
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
}(BaseElement);

var PluginButton = function (_BaseElement) {
    inherits(PluginButton, _BaseElement);

    function PluginButton(name, icon, meister) {
        classCallCheck(this, PluginButton);

        var _this = possibleConstructorReturn(this, (PluginButton.__proto__ || Object.getPrototypeOf(PluginButton)).call(this, meister));

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
}(BaseElement);

var TopBar = function (_BaseElement) {
    inherits(TopBar, _BaseElement);

    function TopBar(config, meister) {
        classCallCheck(this, TopBar);

        var _this = possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'top');

        // Construct and append top left half.
        _this.titleDisplay = new TitleDisplay(meister);
        _this.element.appendChild(_this.titleDisplay.getNode());

        // Construct top right half.
        _this.topRightWrapper = document.createElement('div');
        _this.classListAdd(_this.topRightWrapper, 'pf-ui-wrapper-right');

        if (!_this.config.castButton || !_this.config.castButton.hide) {
            _this.castButton = new CastButton(meister);
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

    createClass(TopBar, [{
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
            var newPlugin = new PluginButton(info.name, info.icon, this.meister);
            this.topRightWrapper.appendChild(newPlugin.getNode());
        }
    }]);
    return TopBar;
}(BaseElement);

var PlayButton = function (_BaseElement) {
    inherits(PlayButton, _BaseElement);

    function PlayButton(meister, config) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';
        classCallCheck(this, PlayButton);

        var _this = possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, meister));

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

    createClass(PlayButton, [{
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
}(BaseElement);

var StepBackButton = function (_BaseElement) {
    inherits(StepBackButton, _BaseElement);

    function StepBackButton(meister, config) {
        classCallCheck(this, StepBackButton);

        var _this = possibleConstructorReturn(this, (StepBackButton.__proto__ || Object.getPrototypeOf(StepBackButton)).call(this, meister));

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

    createClass(StepBackButton, [{
        key: 'onClick',
        value: function onClick() {
            this.meister.trigger('requestSeek', {
                timeOffset: -1 * this.config.stepBack
            });
        }
    }]);
    return StepBackButton;
}(BaseElement);

var StepForwardButton = function (_BaseElement) {
    inherits(StepForwardButton, _BaseElement);

    function StepForwardButton(meister, config) {
        classCallCheck(this, StepForwardButton);

        var _this = possibleConstructorReturn(this, (StepForwardButton.__proto__ || Object.getPrototypeOf(StepForwardButton)).call(this, meister));

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

    createClass(StepForwardButton, [{
        key: 'onClick',
        value: function onClick() {
            this.meister.trigger('requestSeek', {
                timeOffset: this.config.stepForward
            });
        }
    }]);
    return StepForwardButton;
}(BaseElement);

var PlaylistButtons = function (_BaseElement) {
    inherits(PlaylistButtons, _BaseElement);

    function PlaylistButtons(meister) {
        classCallCheck(this, PlaylistButtons);

        var _this = possibleConstructorReturn(this, (PlaylistButtons.__proto__ || Object.getPrototypeOf(PlaylistButtons)).call(this, meister));

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

    createClass(PlaylistButtons, [{
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
}(BaseElement);

var FullscreenButton = function (_BaseElement) {
    inherits(FullscreenButton, _BaseElement);

    function FullscreenButton(meister) {
        classCallCheck(this, FullscreenButton);

        var _this = possibleConstructorReturn(this, (FullscreenButton.__proto__ || Object.getPrototypeOf(FullscreenButton)).call(this, meister));

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

    createClass(FullscreenButton, [{
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
}(BaseElement);

var LIVE_THRESHOLD = 35;

var TimeDisplay = function (_BaseElement) {
    inherits(TimeDisplay, _BaseElement);

    function TimeDisplay(meister) {
        classCallCheck(this, TimeDisplay);

        var _this = possibleConstructorReturn(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).call(this, meister));

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

    createClass(TimeDisplay, [{
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
}(BaseElement);

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

var RESOLUTION = 0;
var BITRATE = 1;

var QualityButton = function (_BaseElement) {
    inherits(QualityButton, _BaseElement);

    function QualityButton(meister, config) {
        classCallCheck(this, QualityButton);

        var _this = possibleConstructorReturn(this, (QualityButton.__proto__ || Object.getPrototypeOf(QualityButton)).call(this, meister));

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
            _this.qualityMapping = _this.config.qualityMapping.map(expandQualityMapping);
        }

        // Store this eventfunction in the instance for easier removal.
        _this.hide = function () {
            _this.classListAdd(_this.qualitySelector, 'hidden');
            document.body.removeEventListener('click', _this.hide);
        };
        return _this;
    }

    createClass(QualityButton, [{
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
                this.bitrates = prepareResolutionMapping(this.bitrates, this.qualityMapping);
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

                prepareBitrateOption(qualityOption, optionOpts.bitrate, optionOpts.index, transform);
            } else if (optionOpts.type === RESOLUTION) {
                prepareResolutionOption(qualityOption, optionOpts.mapping);
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
                bitrateIndex = selectResolution(this.qualityMapping, index, silent);
            } else {
                bitrateIndex = selectBitrate(this.bitrates, index, silent);
            }

            if (Number.isFinite(bitrateIndex)) {
                this.meister.trigger('requestBitrate', {
                    bitrateIndex: bitrateIndex
                });
            }
        }
    }]);
    return QualityButton;
}(BaseElement);

var LanguageButton = function (_BaseElement) {
    inherits(LanguageButton, _BaseElement);

    function LanguageButton(meister) {
        classCallCheck(this, LanguageButton);

        var _this = possibleConstructorReturn(this, (LanguageButton.__proto__ || Object.getPrototypeOf(LanguageButton)).call(this, meister));

        _this.element = document.createElement('div');

        _this.classListAdd(_this.element, 'pf-ui-element', 'pf-ui-element-right', 'pf-ui-element-active');
        _this.classListAdd(_this.element, 'icon', 'icon_icLanguage');
        _this.classListAdd(_this.element, 'pf-ui-element-hidden');

        _this.on('itemLanguages', function (languages) {
            return _this.onItemLanguages(languages);
        });
        return _this;
    }

    createClass(LanguageButton, [{
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
}(BaseElement);

var CaptionsButton = function (_BaseElement) {
    inherits(CaptionsButton, _BaseElement);

    function CaptionsButton(meister) {
        classCallCheck(this, CaptionsButton);

        var _this = possibleConstructorReturn(this, (CaptionsButton.__proto__ || Object.getPrototypeOf(CaptionsButton)).call(this, meister));

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

    createClass(CaptionsButton, [{
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
}(BaseElement);

var SeekbarPreview = function (_BaseElement) {
    inherits(SeekbarPreview, _BaseElement);

    function SeekbarPreview(meister) {
        classCallCheck(this, SeekbarPreview);

        var _this = possibleConstructorReturn(this, (SeekbarPreview.__proto__ || Object.getPrototypeOf(SeekbarPreview)).call(this, meister));

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

    createClass(SeekbarPreview, [{
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
}(BaseElement);

function updateBar(element, percentage) {
    element.style.webkitTransform = 'scaleX(' + percentage + ')'; //eslint-disable-line
    element.style.transform = 'scaleX(' + percentage + ')'; //eslint-disable-line
}

var SeekBar = function (_BaseElement) {
    inherits(SeekBar, _BaseElement);

    function SeekBar(meister) {
        classCallCheck(this, SeekBar);

        var _this = possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, meister));

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

        _this.preview = new SeekbarPreview(meister);
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

    createClass(SeekBar, [{
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
}(BaseElement);

var VolumeSlider = function (_BaseElement) {
    inherits(VolumeSlider, _BaseElement);

    function VolumeSlider(meister) {
        classCallCheck(this, VolumeSlider);

        var _this = possibleConstructorReturn(this, (VolumeSlider.__proto__ || Object.getPrototypeOf(VolumeSlider)).call(this, meister));

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

    createClass(VolumeSlider, [{
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
}(BaseElement);

var BottomBar = function (_BaseElement) {
    inherits(BottomBar, _BaseElement);

    function BottomBar(config, meister) {
        classCallCheck(this, BottomBar);

        var _this = possibleConstructorReturn(this, (BottomBar.__proto__ || Object.getPrototypeOf(BottomBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'bottom');

        // Construct the bottom left half
        _this.bottomLeftWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomLeftWrapper, 'pf-ui-wrapper-left');

        // step back button:
        if (_this.config.stepBack) {
            _this.stepBackButton = new StepBackButton(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepBackButton.getNode());
        }

        _this.playButton = new PlayButton(meister, config);
        _this.bottomLeftWrapper.appendChild(_this.playButton.getNode());

        if (_this.config.stepForward) {
            _this.stepForwardButton = new StepForwardButton(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepForwardButton.getNode());
        }

        _this.playlistButton = new PlaylistButtons(meister);
        _this.bottomLeftWrapper.appendChild(_this.playlistButton.getNode());

        _this.volumeSlider = new VolumeSlider(meister);
        _this.bottomLeftWrapper.appendChild(_this.volumeSlider.getNode());

        _this.timeDisplay = new TimeDisplay(meister);
        _this.bottomLeftWrapper.appendChild(_this.timeDisplay.getNode());

        // Append to wrapper
        _this.element.appendChild(_this.bottomLeftWrapper);

        // Construct and append the top wrapper
        _this.seekBar = new SeekBar(meister);
        _this.element.appendChild(_this.seekBar.getNode());

        // Construct the bottom right half
        _this.bottomRightWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomRightWrapper, 'pf-ui-wrapper-right');

        _this.fullscreenButton = new FullscreenButton(meister);
        _this.bottomRightWrapper.appendChild(_this.fullscreenButton.getNode());

        if (!_this.config.qualityButton || !_this.config.qualityButton.hide) {
            _this.qualityButton = new QualityButton(meister, _this.config);
            _this.bottomRightWrapper.appendChild(_this.qualityButton.getNode());
        }

        _this.langButton = new LanguageButton(meister);
        _this.bottomRightWrapper.appendChild(_this.langButton.getNode());

        _this.ccButton = new CaptionsButton(meister);
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

    createClass(BottomBar, [{
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
}(BaseElement);

var CondensedBar = function (_BaseElement) {
    inherits(CondensedBar, _BaseElement);

    function CondensedBar(config, meister) {
        classCallCheck(this, CondensedBar);

        var _this = possibleConstructorReturn(this, (CondensedBar.__proto__ || Object.getPrototypeOf(CondensedBar)).call(this, meister));

        _this.config = config;

        _this.element = document.createElement('div');
        _this.classListAdd(_this.element, 'pf-control-bar', 'bottom');

        // Construct the bottom left half
        _this.bottomLeftWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomLeftWrapper, 'pf-ui-wrapper-left');

        // step back button:
        if (_this.config.stepBack) {
            _this.stepBackButton = new StepBackButton(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepBackButton.getNode());
        }

        _this.playButton = new PlayButton(meister, config);
        _this.bottomLeftWrapper.appendChild(_this.playButton.getNode());

        if (_this.config.stepForward) {
            _this.stepForwardButton = new StepForwardButton(meister, config);
            _this.bottomLeftWrapper.appendChild(_this.stepForwardButton.getNode());
        }

        _this.playlistButton = new PlaylistButtons(meister);
        _this.bottomLeftWrapper.appendChild(_this.playlistButton.getNode());

        _this.volumeSlider = new VolumeSlider(meister);
        _this.bottomLeftWrapper.appendChild(_this.volumeSlider.getNode());

        _this.timeDisplay = new TimeDisplay(meister);
        _this.bottomLeftWrapper.appendChild(_this.timeDisplay.getNode());

        // Append to wrapper
        _this.element.appendChild(_this.bottomLeftWrapper);

        // Construct and append the top wrapper
        _this.seekBar = new SeekBar(meister);
        _this.element.appendChild(_this.seekBar.getNode());

        // Construct the bottom right half
        _this.bottomRightWrapper = document.createElement('div');
        _this.classListAdd(_this.bottomRightWrapper, 'pf-ui-wrapper-right');

        if (!_this.config.castButton || !_this.config.castButton.hide) {
            _this.castButton = new CastButton(meister);
            _this.bottomRightWrapper.appendChild(_this.castButton.getNode());
        }

        if (!_this.config.qualityButton || !_this.config.qualityButton.hide) {
            _this.qualityButton = new QualityButton(meister, _this.config);
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

    createClass(CondensedBar, [{
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
}(BaseElement);

var Preview = function (_BaseElement) {
    inherits(Preview, _BaseElement);

    function Preview(meister) {
        classCallCheck(this, Preview);

        var _this = possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, meister));

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

    createClass(Preview, [{
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
}(BaseElement);

var PlayButton$2 = function (_BaseElement) {
    inherits(PlayButton, _BaseElement);

    function PlayButton(meister) {
        classCallCheck(this, PlayButton);

        var _this = possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).call(this, meister));

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

    createClass(PlayButton, [{
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
}(BaseElement);

var AdControls = function (_BaseElement) {
    inherits(AdControls, _BaseElement);

    function AdControls(meister, config) {
        classCallCheck(this, AdControls);

        var _this = possibleConstructorReturn(this, (AdControls.__proto__ || Object.getPrototypeOf(AdControls)).call(this, meister));

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
        _this.adPlayButton = new PlayButton$2(meister, config, 'ad');
        _this.extraAdControlsWrapper.appendChild(_this.adPlayButton.getNode());

        _this.fullscreenButton = new FullscreenButton(meister);
        _this.classListAdd(_this.fullscreenButton.getNode(), 'pf-ad-fullscreen');
        _this.classListRemove(_this.fullscreenButton.getNode(), 'pf-mobile');
        _this.extraAdControlsWrapper.appendChild(_this.fullscreenButton.getNode());

        _this.volumeSlider = new VolumeSlider(meister);
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

    createClass(AdControls, [{
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
}(BaseElement);

var PluginSpace = function (_BaseElement) {
    inherits(PluginSpace, _BaseElement);

    function PluginSpace(meister, controls) {
        classCallCheck(this, PluginSpace);

        var _this = possibleConstructorReturn(this, (PluginSpace.__proto__ || Object.getPrototypeOf(PluginSpace)).call(this, meister));

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

    createClass(PluginSpace, [{
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
}(BaseElement);

var Spinner = function (_BaseElement) {
    inherits(Spinner, _BaseElement);

    function Spinner(meister) {
        classCallCheck(this, Spinner);

        var _this = possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, meister));

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

    createClass(Spinner, [{
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
}(BaseElement);

var TIME_TILL_FADE = 3000;

var StandardUi$1 = function (_Meister$Ui) {
    inherits(StandardUi, _Meister$Ui);
    createClass(StandardUi, null, [{
        key: 'KEY_SPACEBAR',
        get: function get$$1() {
            return 32;
        }
    }, {
        key: 'KEY_MEDIAPLAYPAUSE',
        get: function get$$1() {
            return 179;
        }
    }]);

    function StandardUi(config, meister) {
        classCallCheck(this, StandardUi);

        var _this = possibleConstructorReturn(this, (StandardUi.__proto__ || Object.getPrototypeOf(StandardUi)).call(this, config, meister));

        if (Number.isFinite(_this.config.timeToFade)) {
            TIME_TILL_FADE = _this.config.timeToFade * 1000;
        }

        _this.standardWrapper = document.createElement('div');
        _this.meister.elementUtils.classListAdd(_this.standardWrapper, 'pf-controls-wrapper');

        _this.preview = new Preview(meister);
        _this.spinner = new Spinner(meister);

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
            _this.bottomBar = new CondensedBar(config, meister);
        } else {
            _this.topBar = new TopBar(config, meister);
            _this.bottomBar = new BottomBar(config, meister);
        }

        _this.adControls = new AdControls(meister, config);
        _this.pluginSpace = new PluginSpace(meister, _this);

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

    createClass(StandardUi, [{
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
            get(StandardUi.prototype.__proto__ || Object.getPrototypeOf(StandardUi.prototype), 'destroy', this).call(this);

            clearTimeout(this.mouseTimeout);
            clearTimeout(this.controlsTimeout);

            window.removeEventListener('mouseup', this.onMouseUp);
            window.removeEventListener('touchend', this.onMouseUp);
        }
    }], [{
        key: 'pluginName',
        get: function get$$1() {
            return 'StandardUi';
        }
    }]);
    return StandardUi;
}(Meister.Ui);

Meister.registerPlugin(StandardUi$1.pluginName, StandardUi$1);

export default StandardUi$1;
//# sourceMappingURL=StandardUi.js.map
