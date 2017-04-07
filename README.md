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

### castButton.hide *[Boolean]* (default: true) ###

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

