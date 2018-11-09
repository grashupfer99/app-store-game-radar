const common = require("./common.js");
const { mediaType, feedType, country } = require("./config.js");

const getGameData = async paramsObj => {
  const fullDetailsLookUpUrl = "https://itunes.apple.com/lookup";
  const appStoreUrl = `https://rss.itunes.apple.com/api/v1/${
    paramsObj.country
  }/${paramsObj.mediaType}/${paramsObj.feedType}/${
    paramsObj.num
  }/explicit.json`;

  try {
    const requestGameData = await axios.get(appStoreUrl);
    const getGameIDs = requestGameData.data.feed.results.map(item => item.id);
    const joinGameIds = getGameIDs.map(item => item).join(",");
    const fullDataUrl = `${fullDetailsLookUpUrl}?id=${joinGameIds}&country=${
      paramsObj.country
    }`;
    const getFullData = await axios.get(fullDataUrl);
    const result = common.gameInfo(getFullData);
    return result;
  } catch (e) {
    console.error("error fetching data: ", e);
  }
};
