## App Store Game Radar


[![Build Status](https://travis-ci.org/grashupfer99/app-store-game-radar.svg?branch=master)](https://travis-ci.org/grashupfer99/app-store-game-radar)

[![npm](https://img.shields.io/npm/v/app-store-game-radar.svg)](https://www.npmjs.com/package/app-store-game-radar)

[![NPM](https://nodei.co/npm/app-store-game-radar.png?downloads=true)](https://nodei.co/npm/app-store-game-radar/)


This dependency-free Node.js module fetches iTunes games through the 'RSS Feed Generator'. I was asked at work to create a similar [scraper][scraper_inspiration] that retrieves only a list of games in a top-free category at iTunes game market. After a successful implementation I decided to create a npm package and to publish it. Hopefully, later on I'll put more efforts into expanding this small project.  


RSS Feed Generator Settings: [here][feedsettings]


### gameScraper

Fetches a collection of game data from the iTunes App Store.

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


# Results:

```sh
{ id: 1317213680,
  appId: 'com.kakaogames.fracing',
  title: '프렌즈레이싱',
  url: 'https://itunes.apple.com/kr/app/%ED%94%84%EB%A0%8C%EC%A6%88%EB%A0%88%EC%9D%B4%EC%8B%B1/id1317213680?mt=8&uo=4',

  description: '프렌즈와 씽나게 밟아버려씽! ...',
  icon: 'https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/0a/51/d1/0a51d112-b906-ec8f-41bf-c6e13c9304ea/source/512x512bb.jpg',
  genres: [ '게임', '레이싱' ],
  genreIds: [ '6014', '7013' ],
  primaryGenre: 'Games',
  primaryGenreId: 6014,
  contentRating: '4+',
  languages: [ 'KO' ],
  size: '1176556544',
  requiredOsVersion: '8.0',
  released: '2018-10-17T22:15:11Z',
  updated: '2018-11-12T19:14:37Z',
  releaseNotes: '- 1.1.1 버전 업데이트\n- 게임 안정화 및 기타 버그 수정 ...',
  version: '1.1.1',
  price: 0,
  currency: 'KRW',
  free: true,
  developerId: 1002306740,
  developer: 'Kakao Games Corp.',
  developerUrl: 'https://itunes.apple.com/kr/developer/kakao-games-corp/id1002306740?uo=4',
  developerWebsite: undefined,
  score: 3.5,
  reviews: 7198,
  currentVersionScore: 4.5,
  currentVersionReviews: 3138,
  screenshots:
   [ 'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/a8/4e/0e/a84e0e30-e2e7-ad34-2135-23bdbc9550b7/source/552x414bb.jpg',
     ... ],
  ipadScreenshots:
   [ 'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/a8/4e/0e/a84e0e30-e2e7-ad34-2135-23bdbc9550b7/source/552x414bb.jpg',
    ... ],
  appletvScreenshots: [],
  supportedDevices:
  [
    'iPadMini4G-iPadMini4G',
     ... ] }
```


# TODO:

- [x] 0 screenshots for ipad issue 
- [ ] Scrape data for developerWebsite option


More improvements soon.

[feedsettings]: http://rss.itunes.apple.com/en-us
[scraper_inspiration]: http://www.npmjs.com/package/app-store-scraper
