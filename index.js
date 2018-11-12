const type = require("./config");
const common = require("./common");
const https = require('https');

// Wrapper to return body through a Promise 
const httpGetUrl = url => {
  return new Promise((resolve, reject)=> {
    https.get(url, res => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', data => body += data);
      res.on('end', () => {
        body = JSON.parse(body);
        return resolve(body);
      }).on('error', reject);
    })
  })
}

// Scrape game data from app-store
const store = async paramsObj => {
  paramsObj.explicit ? 'explicit' : 'non-explicit';
  const fullDetailsLookUpUrl = "https://itunes.apple.com/lookup";
  const appStoreUrl = `https://rss.itunes.apple.com/api/v1/${
    paramsObj.country
  }/${type.media.iosApps}/${paramsObj.feed}/${
    paramsObj.num
  }/${paramsObj.explicit}.json`;
  console.log(appStoreUrl);

  const gameData = await httpGetUrl(appStoreUrl);
  const getGameIDs = gameData.feed.results.map(item => item.id);
  const joinGameIDs = getGameIDs.map(item => item).join(',');
  const fullDataUrl = `${fullDetailsLookUpUrl}?id=${joinGameIDs}&country=${
      paramsObj.country
    }`;
  const getFullData = await httpGetUrl(fullDataUrl);
  const result = common.gameInfo(getFullData)

  return result;
};

module.exports = { type, store };
