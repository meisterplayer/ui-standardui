# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.8.3](https://github.com/meisterplayer/ui-standardui/compare/v5.8.2...v5.8.3) (2019-09-25)


### Bug Fixes

* Properly calculate buffered size ([6a25af7](https://github.com/meisterplayer/ui-standardui/commit/6a25af7))



### [5.8.2](https://github.com/meisterplayer/ui-standardui/compare/v5.8.1...v5.8.2) (2019-08-19)


### Bug Fixes

* **quality:** Add check whether quality mapping needs cleanup ([5811aae](https://github.com/meisterplayer/ui-standardui/commit/5811aae))



### [5.8.1](https://github.com/meisterplayer/ui-standardui/compare/v5.8.0...v5.8.1) (2019-07-31)


### Bug Fixes

* **quality:** Clear previous bitrates in the quality mapping ([196475c](https://github.com/meisterplayer/ui-standardui/commit/196475c))



## [5.8.0](https://github.com/meisterplayer/ui-standardui/compare/v5.7.0...v5.8.0) (2019-06-04)


### Features

* **live:** Make live threshold configurable ([3644198](https://github.com/meisterplayer/ui-standardui/commit/3644198))



<a name="5.7.0"></a>
# [5.7.0](https://github.com/meisterplayer/ui-standardui/compare/v5.6.0...v5.7.0) (2019-01-08)


### Features

* **quality:** Remove stored bitrate index when quality config is set to hidden ([bc9c9ce](https://github.com/meisterplayer/ui-standardui/commit/bc9c9ce))



<a name="5.6.0"></a>
# [5.6.0](https://github.com/meisterplayer/ui-standardui/compare/v5.5.0...v5.6.0) (2018-11-27)


### Features

* **ads:** Make the preview button more aware of ads so it can adjust accordingly ([615f315](https://github.com/meisterplayer/ui-standardui/commit/615f315))



<a name="5.5.0"></a>
# [5.5.0](https://github.com/meisterplayer/ui-standardui/compare/v5.4.5...v5.5.0) (2018-11-12)


### Bug Fixes

* **play:** Clicking the overlay no longer starts playback before loading ([2a9782c](https://github.com/meisterplayer/ui-standardui/commit/2a9782c))


### Features

* **events:** Add events for start/stop scrubbing ([279c8b1](https://github.com/meisterplayer/ui-standardui/commit/279c8b1))



<a name="5.4.5"></a>
## [5.4.5](https://github.com/meisterplayer/ui-standardui/compare/v5.4.4...v5.4.5) (2018-06-11)


### Bug Fixes

* **edge:** Fix issue where Edge was not rendering correctly ([302119a](https://github.com/meisterplayer/ui-standardui/commit/302119a))



<a name="5.4.4"></a>
## [5.4.4](https://github.com/meisterplayer/ui-standardui/compare/v5.4.3...v5.4.4) (2017-12-04)

### Features
* **localization:** Add more localization properties


<a name="5.4.3"></a>
## [5.4.3](https://github.com/meisterplayer/ui-standardui/compare/v5.4.2...v5.4.3) (2017-11-23)


### Features

* **bitrates:** Remember the chosen bitrate via localStorage ([ad1b87a](https://github.com/meisterplayer/ui-standardui/commit/ad1b87a))



<a name="5.4.2"></a>
## [5.4.2](https://github.com/meisterplayer/ui-standardui/compare/v5.4.1...v5.4.2) (2017-10-19)


### Bug Fixes

* **mobile:** Fix issue with mobile alignment ([fe2e83e](https://github.com/meisterplayer/ui-standardui/commit/fe2e83e))



<a name="5.4.1"></a>
## [5.4.1](https://github.com/meisterplayer/ui-standardui/compare/v5.3.1...v5.4.1) (2017-09-21)


### Bug Fixes

* **playPauseOnScreenClick:** Fix issue where giving true would disable it ([3b7bdd1](https://github.com/meisterplayer/ui-standardui/commit/3b7bdd1))


### Features

* **config:** Add playPauseOnScreenClick option ([103b40b](https://github.com/meisterplayer/ui-standardui/commit/103b40b))



<a name="5.4.0"></a>
# [5.4.0](https://github.com/meisterplayer/ui-standardui/compare/v5.3.1...v5.4.0) (2017-09-18)


### Features

* **config:** Add playPauseOnScreenClick option ([103b40b](https://github.com/meisterplayer/ui-standardui/commit/103b40b))



<a name="5.3.1"></a>
## [5.3.1](https://github.com/meisterplayer/ui-standardui/compare/v5.3.0...v5.3.1) (2017-08-29)


### Bug Fixes

* **mobile:** Fix issue where font's where too small ([973ec81](https://github.com/meisterplayer/ui-standardui/commit/973ec81))



<a name="5.3.0"></a>
# [5.3.0](https://github.com/meisterplayer/ui-standardui/compare/v5.2.0...v5.3.0) (2017-06-27)


### Bug Fixes

* **ui:** Double clicking controls no longer enters fullscreen ([e4daffb](https://github.com/meisterplayer/ui-standardui/commit/e4daffb)), closes [meisterplayer/meisterplayer#43](https://github.com/meisterplayer/meisterplayer/issues/43)


### Features

* **pluginVersion:** Add pluginVersion to class ([70edff2](https://github.com/meisterplayer/ui-standardui/commit/70edff2))
* **seekbar:** Add SeekLimiter support ([84faaeb](https://github.com/meisterplayer/ui-standardui/commit/84faaeb))



<a name="5.2.0"></a>
# [5.2.0](https://github.com/meisterplayer/ui-standardui/compare/v5.1.0...v5.2.0) (2017-05-29)


### Features

* **backwards-compatible:** Remove backwards compatible in order to remove errors ([b0a70de](https://github.com/meisterplayer/ui-standardui/commit/b0a70de))



<a name="5.1.0"></a>
# 5.1.0 (2017-04-25)


### Bug Fixes

* **adCuePoints:** Fix issue where cue points would not be correctly set on iOS devices. ([4015a75](https://github.com/meisterplayer/ui-standardui/commit/4015a75))
* **ads:** Fix issue where advertisement iframe would block controls ([0713d4c](https://github.com/meisterplayer/ui-standardui/commit/0713d4c))
* **ads:** Play/pause button displays correctly during ads ([0dc7e8e](https://github.com/meisterplayer/ui-standardui/commit/0dc7e8e))
* **captions:** Resolve issue with displaying subtitle list ([158db2b](https://github.com/meisterplayer/ui-standardui/commit/158db2b))
* **css:** fixed wrong classnames ([7d01bf2](https://github.com/meisterplayer/ui-standardui/commit/7d01bf2))
* **volume:** Fix issue where volume button was not prefixed ([5ab1f5e](https://github.com/meisterplayer/ui-standardui/commit/5ab1f5e))


### Features

* **adui:** Show nothing instead of Ad 1 of X (0) ([a6701e2](https://github.com/meisterplayer/ui-standardui/commit/a6701e2))
* **standard:** Add config option enableAirPlay ([f68838e](https://github.com/meisterplayer/ui-standardui/commit/f68838e))
* **styles:** Namespace icon -> pf-icon ([2d8a2a5](https://github.com/meisterplayer/ui-standardui/commit/2d8a2a5))
* **timedisplay:** Set time to 0:00 instead of - ([0437f14](https://github.com/meisterplayer/ui-standardui/commit/0437f14))
* **ui:** Add triggerByUser on ad play/pause ([455ced4](https://github.com/meisterplayer/ui-standardui/commit/455ced4))
