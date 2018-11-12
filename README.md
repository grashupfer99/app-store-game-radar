## App Store Game Radar

This simple dependency-free Node.js module fetches the iTunes games through the 'RSS Feed Generator'. 

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

app.store({
    country: "kr",
    feedType: app.type.feed.newGamesWelove (topFree, topPaid),
    num: 10 ~ 200
    explicit: true / false
  });
```

More improvements soon.

[feedSettings]: <http://rss.itunes.apple.com/en-us>