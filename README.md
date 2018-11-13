## App Store Game Radar

[![NPM](https://nodei.co/npm/app-store-game-radar.png?downloads=true)](https://nodei.co/npm/app-store-game-radar/)

[![Build Status](https://travis-ci.org/grashupfer99/app-store-game-radar.svg?branch=master)](https://travis-ci.org/grashupfer99/app-store-game-radar)

[![npm](https://img.shields.io/npm/v/app-store-game-radar.svg)](https://www.npmjs.com/package/app-store-game-radar)

This simple dependency-free Node.js module fetches iTunes games through the 'RSS Feed Generator'.


Feed settings: [here][feedsettings]


Feed types (games):

- New Games We Love
- Top Free
- Top Paid

# Install:

```sh
npm i app-store-game-radar
```

# Usage:

```sh
const app = require("app-store-game-radar");

app.gameScraper({
    country: "kr", // e.g. "us", "cn", "jp"
    feedType: app.type.newGamesWelove, // topFree, topPaid
    num: 10 ~ 200,
    explicit: true / false
  }).then(data => console.log(data))
```

# TODO:

- [ ] Default input parameters
- [ ] Input validation
- [ ] Scrape data for developerWebsite option
- [ ] Unit testing


More improvements soon.

[feedsettings]: http://rss.itunes.apple.com/en-us
