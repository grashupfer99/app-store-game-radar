## App Store Game Radar

The app fetches itunes games in the "top-free" category.
Only available only for South Korean market.
Usage:
```sh
npm i app-store-game-radar

const app = require("app-store-game-radar");
app.getGameData({
    country: "kr",
    mediaType: app.collection.mediaType.iosApps,
    feedType: app.collection.feedType.topFree,
    num: 10
  });
```

More improvements soon.
