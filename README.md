## App Store Game Radar

The app fetches itunes games in the "top-free" category.
For now it's only available for a South Korean market.

Install:
```sh
npm i app-store-game-radar
```

Usage:
```sh
const app = require("app-store-game-radar");
app.getGameData({
    country: "kr",
    mediaType: app.collection.mediaType.iosApps,
    feedType: app.collection.feedType.topFree,
    num: 10 // - 200
  });
```

More improvements soon.
