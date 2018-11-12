## App Store Game Radar

[![npm](https://img.shields.io/npm/v/app-store-game-radar.svg)](https://www.npmjs.com/package/app-store-game-radar)

This simple dependency-free Node.js module fetches iTunes games through the 'RSS Feed Generator'. 

Feed settings: [here][feedSettings]

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

app.AppStore({
    country: "kr",
    feedType: app.type.newGamesWelove (topFree, topPaid),
    num: 10 ~ 200
    explicit: true / false
  });
```

More improvements soon.

[feedSettings]: <http://rss.itunes.apple.com/en-us>