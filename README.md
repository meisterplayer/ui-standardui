StandardUi plugin for Meister
====

This is the default theme for the Meister player. It's a simple modern design that fits most needs today. It also has mobile support.

![](http://meisterplayer.triple-it.nl/demo/res/standardui.png)

Getting started
----

To get started add the ```StandardUi``` object to your Meister config:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {},
});

// Continue configuration
meisterPlayer.setItem( ... );
```

Config options
----

The following options are configurable through the ```StandardUi``` config option:

### timeToFade *[Number]* (in sec) (default: 3)###

Sets the amount of seconds it takes before the UI fades out when the mouse is not performing an action on the UI.

Example:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        timeToFade: 4, // Now it takes 4 seconds before the UI fades away
    }
});

meisterPlayer.setItem( ... );
```


### fixedControls *[Boolean]* (default: false) ###

In addition it is possible to completely disable the hiding of the controls. You can set the initial state through the `fixedControls` config value, and change it manually by triggering an event on the in
stance.

```JavaScript
const player = new Meister('#targetDiv', {
    ...,
    standard: {
        fixedControls: false, // Default value
    }
});

// Player now hides controls after 3 seconds of no mouse activity.

player.trigger('standard:toggleFixedControls', {
    fixed: true,
});

// Player now shows controls and disables the hiding mechanism.

player.trigger('standard:toggleFixedControls', {
    fixed: false,
});

// Player now hides controls after <timeToFade> seconds once again.
```

### disablePauseWithLive *[Boolean]* (default: false) ###

Disables the pause button when live content is being played.


``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        disablePauseWithLive: true,
    }
});

meisterPlayer.setItem( ... );
```

### condensedUi *[Boolean]* (default: false) ###

For a more mobile-friendly audio UI you can pass the condensedUi config flag to the standard UI plugin. This will disable the top bar, which makes lower player height values possible. In addition, this option removes the full screen button and replaces it with the cast button.


``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        condensedUi: true,
    }
});

meisterPlayer.setItem( ... );
```

### stepBack *[Number]* (in sec) (default: undefined) ###

Adds an step/fast backward ui button in the player. It uses the configured number for how much seconds you want to seek backwards.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        stepBack: 30, // Clicking the step backward button travels 30 seconds back in the timeline.
    }
});

meisterPlayer.setItem( ... );
```

### stepForward *[Number]* (in sec) (default: undefined) ###

Adds an step/fast forward ui button in the player. It uses the configured number for how much seconds you want to seek forwards.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        stepForward: 30, // Clicking the step forward button travels 30 seconds in time.
    }
});

meisterPlayer.setItem( ... );
```

### liveThreshold *[Number]* (in sec) (default: 35) ###

Determines the range near the live edge which is considered 'live' for practical purposes. By default anything closer than 35 seconds to the live edge is considered 'live' and will not trigger the button to seek to the live edge.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        liveThreshold: 30,
    }
});

meisterPlayer.setItem( ... );
```

### castButton.hide *[Boolean]* (default: false) ###

Hides the castbutton for chromecast. This usually goes in conjuction with a chromecast plugin.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        castButton: {
            hide: true,
        }
    }
});

meisterPlayer.setItem( ... );
```

### qualityButton.hide *[Boolean]* (default: false) ###

Hides the quality selector.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        qualityButton: {
            hide: true,
        }
    }
});

meisterPlayer.setItem( ... );
```

#### Quality Selector ####

There are 3 options for Bitrate-switching.

### Default Mode (No Config needed) ###

Use the bitrates parsed from the stream without any custom formatting.

### bitrateToResolution *[function]* (optional) ###

Configure a function used to format the bitrates, which takes the bitrate as input and returns the desired string to display to the user. The auto bitrate is taken care of automatically.

```JavaSCript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        bitrateToResolution : function (bitrate) {
            // A negative bitrate does not make sense
            if (bitrate < 0) {
                return 'NaN';
            }

            // Convert to mbits
            var bitsps = bitrate * 8;
            var e = Math.floor(Math.log(bitsps) / Math.log(1000));
            var mbits = bitsps / Math.pow(1000, Math.floor(e));

            if (mbits <= 2) {
                return '240p';
            } else if (mbits <= 4.5) {
                return '360p';
            } else if (mbits <= 9) {
                return '480p';
            } else if (mbits <= 13) {
                return '720p';
            } else {
                return '1080p';
            }
        }
    }
});

meisterPlayer.setItem( ... );
```

### qualityMapping *[Array]* (optional) ###

You can use a mapping from bitrates to resolutions by using the `qualityMapping` option. This will group all bitrate in a certain range under a single entry in the quality selector. The ranges go from X up to and including Y, so for `{ from: 0, to: 10, resolution: low}` the bitrates 1 through 10 will be mapped under 'low', and bitrate 0 will not.
When selecting a bitrate from the quality selector the highest bitrate within that mapping will be requested.

```JavaScript
var meisterPlayer = new Meister('#player', {
    StandardUi: {
        qualityMapping: [
            {
                from: -1,
                to: 0,
                resolution: 'auto',
            },
            {
                from: 0,
                to: 200000,
                resolution: '160p',
            },
            {
                from: 200000,
                to: 1200000,
                resolution: '360p',
            },
            {
                from: 1200000,
                to: 2850000,
                resolution: '720p',
            },
            {
                from: 2850000,
                to: 6000000,
                resolution: '1080p',
            }
        ]
    }
});

meisterPlayer.setItem( ... );
```
