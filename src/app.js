const gameData = require("./storeData").gameData;
const httpsGet = require("../src/httpsGet").httpsGet;
const type = require("../src/config");

// Scrape game data from app-store
exports.appStore = async paramsObj => {
  paramsObj.explicit ? "explicit" : "non-explicit";
  const fullDetailsLookUpUrl = "https://itunes.apple.com/lookup";
  const appStoreUrl = `https://rss.itunes.apple.com/api/v1/${
    paramsObj.country
  }/${type.media.iosApps}/${paramsObj.feed}/${paramsObj.num}/${
    paramsObj.explicit
  }.json`;

  const getGameInfo = await httpsGet(appStoreUrl);
  const getGameIDs = getGameInfo.feed.results.map(item => item.id);
  const joinGameIDs = getGameIDs.map(item => item).join(",");
  const fullDataUrl = `${fullDetailsLookUpUrl}?id=${joinGameIDs}&country=${
    paramsObj.country
  }`;
  const getFullData = await httpsGet(fullDataUrl);
  const result = gameData(getFullData);

  return result;
};
