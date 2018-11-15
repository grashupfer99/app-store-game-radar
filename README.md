## App Store Game Radar

[![NPM](https://nodei.co/npm/app-store-game-radar.png?downloads=true)](https://nodei.co/npm/app-store-game-radar/)

[![Build Status](https://travis-ci.org/grashupfer99/app-store-game-radar.svg?branch=master)](https://travis-ci.org/grashupfer99/app-store-game-radar)

[![npm](https://img.shields.io/npm/v/app-store-game-radar.svg)](https://www.npmjs.com/package/app-store-game-radar)

This simple dependency-free Node.js module fetches iTunes games through the 'RSS Feed Generator'. My boss at work asked me to create a similar scraper to the [app-store-scraper][scraper_inspiration] that retrieves only the list of games in a top-free category. After a successful implementation I decided create a package and publish it. Hopefully, I'll put more efforts into expanding this project soon.  


Feed settings: [here][feedsettings]


### gameScraper

Fetches a collection of game data from the iTunes.
* `country`: the country code to get the data from its local App-Store market. E.g. `"us"`, `"cn"`, `"jp"`. Default: `'kr'`
* `category`: a type of category to retrieve data from. E.g. `"newGamesWelove"`, `"topFree"`, `"topPaid"`, Default: `"topFree"`
* `num`: the number of items to retrieve. Default: `'200'`
* `fullDetails`: the option to retrieve a detailed list of games. E.g. `true`, `false`. Default: `false`.


# Install:

```sh
npm i app-store-game-radar
```

# Usage:

```sh
const app = require("app-store-game-radar");

app.gameScraper({
    country: "us",
    category: app.type.topFree
    num: 10,
    fullDetails: true
  }).then(data => console.log(data))
```

# TODO:

- [x] Default parameters
- [x] fullDetails option
- [ ] Scrape data for developerWebsite option
- [ ] Unit testing


More improvements soon.

[feedsettings]: http://rss.itunes.apple.com/en-us
[scraper_inspiration]: http://www.npmjs.com/package/app-store-scraper
