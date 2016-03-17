#Robonkey Generator


> A [Yeoman](http://yeoman.io) front-end application generator with Jade, Sass &amp; Gulp

> **This generator is a work in progress.**
> **There probably will be some bugs and missing features.**
> **Likewise, this documentation isn't finished yet either.**

![image](docs/robonkeyscreenshot.png)

## Features

* Gulp
* Jade _(Optional)_
* SCSS
* BrowserSync
* PostCSS _(Optional)_
* Autoprefixr _(Automatically used **if postCSS is true**)_
* Image Optimalisation
* Custom Icon Font Generator _(Optional)_
* Modernizr Builder _(Optional)_


## Getting Started
	This generator isn't on npm yet, so if you want to use it, you'll need to:

Download this repo, and navigate to the folder:

	$ cd path/to/generator-robonkey

Make a symlink to your node working directory:

	$ npm link

Install yo:

	$ npm install -g yo

Install Robonkey:

	$ yo robonkey



## Options

* Javascript Libraries
	* jQuery
	* Waypoints
	* Signals
	* D3
	* TweenMax
	* Enquire
	* Google Analytics Script in body
* Jade
* Modernizr
* Custom Icon Font Generator	 
* PostCSS
	* CSSNano
	* MQPacker
	* MQKeyframes
	* SelectorNot
	* SelectorMatcher
	* Prefix selectors
	* Scopify selectors
* Base styles
	* Reset
	* Normalize
	* Sanitize
* SCSS Libraries
	* Susy
	* Breakpoint
* HTML5 Boilerplate extra's
	* .htaccess
	* browserconfig.xml
	* crossdomain.xml
	* robots.txt and humans.txt


## Docs

* [Getting started](docs/README.md)
* [Features](docs/features.md)
* [Options](docs/options.md)
* [Mixins](docs/mixins.md)
