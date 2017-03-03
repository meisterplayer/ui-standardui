### Standard UI Configuration options ###

*please note; this needs to be refined*

#### Skip forward and back-buttons ####
These buttons are place respectively before and after play/pause button. Used to skip back or forward in time x seconds.. X can be configured, value is in seconds, eg;

            `standard:{
                stepBack:30,
                stepForward:30
            }`

Styling can be applied by using :

`.icon_icStepBackward:before {
	content:'\f10c';
}`

and

`.icon_icStepForward:before {
	content:'\f10c';
}`

### Disabling Pause During Live ###

It is possible to disable the pause button for live content by passing `disablePauseWithLive` config value during initialisation.

```JavaScript
const player = new Meister('#targetDiv', {
    ...,
    standard: {
        disablePauseWithLive: true,
    },
});
```

### Condensed UI ###

For a more mobile-friendly audio UI you can pass the `condensedUi` config flag to the standard UI plugin. This will disable the top bar, which makes lower player height values possible. In addition, this option removes the full screen button and replaces it with the cast button.

```JavaScript
const player = new Meister('#targetDiv', {
    // other options...,
    standard: {
        condensedUi: true,
    }
});

```

### Disable Auto Hide Controls ###

By default the controls will hide after 3 seconds, and show again on mouseover. The duration before the controls fade is configurable through the `timeToFade` config value:

```JavaScript
const player = new Meister('#targetDiv', {
    ...,
    standard: {
        timeToFade: 3, // Time in seconds.
    }
});
```

In addition it is possible to completely disable the hiding of the controls. You can set the initial state through the `fixedControls` config value, and change it manually by triggering an event on the instance.

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

// Player now hides controls after 3 seconds once again.
```

#### Resolution and Bitrate-switching ####
There are 3 options for Bitrate-switching;

1. Use the bitrates parsed from the stream without any custom formatting; no need for extra configuration.
2. Configure a method to reformat/recalculate the bitrates, this can be configured in the ```bitrateToResolution``` option, eg:
                `bitrateToResolution : function(bitrate) {
                    // A negative bitrate does not make sense
                    if (bitrate < 0) {
                        return NaN;
                    }

                    let bitsps = bitrate * 8;
                    let e = Math.floor(Math.log(bitsps) / Math.log(1000));
                    let mbits = bitsps / Math.pow(1000, Math.floor(e));

                    // Following what we assume the platform outputs:
                    // https://www.theplatform.com/blog/publishing-mpx-accelerate/
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
                }`

3. You can use a mapping from bitrates to resolutions by using the `qualityMapping` option, eg:

                `qualityMapping: [
                    {
                        from:-1,
                        to:0,
                        resolution:'auto',
                    },
                    {
                        from:0,
                        to:200000,
                        resolution:'160p',
                    },
                    {
                        from:200000,
                        to:1200000,
                        resolution:'360p',
                    },
                    {
                        from:1200000,
                        to:2850000,
                        resolution:'720p',
                    },
                    {
                        from:2850000,
                        to:6000000,
                        resolution:'1080p',
                    }
                ]`

#### Language ####
Please refer to the global meister configuration for language settings
