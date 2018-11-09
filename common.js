const axios = require("axios");

const gameInfo = data => {
  let result = [];
  data.data.results.map(item => {
    result.push({
      id: item.trackId,
      appId: item.bundleId,
      title: item.trackName,
      url: item.trackViewUrl,
      description: item.description,
      icon: item.artworkUrl512,
      genres: item.genres.map(genre => genre),
      genreIds: item.genreIds.map(genreId => genreId),
      primaryGenre: item.primaryGenreName,
      primaryGenreId: item.primaryGenreId,
      contentRating: item.trackContentRating,
      languages: item.languageCodesISO2A.map(lang => lang),
      size: item.fileSizeBytes,
      requiredOsVersion: item.minimumOsVersion,
      released: item.releaseDate,
      updated: item.currentVersionReleaseDate,
      releaseNotes: item.releaseNotes,
      version: item.version,
      price: item.price,
      currency: item.currency,
      free: item.formattedPrice === "무료" ? true : false,
      developerId: item.artistId,
      developer: item.artistName,
      developerUrl: item.artistViewUrl,
      developerWebsite: undefined,
      score: item.averageUserRating,
      reviews: item.userRatingCount,
      currentVersionScore: item.averageUserRatingForCurrentVersion,
      currentVersionReviews: item.userRatingCountForCurrentVersion,
      screenshots: item.ipadScreenshotUrls.map(imgUrl => imgUrl),
      ipadScreenshots: item.ipadScreenshotUrls.map(imgUrl => imgUrl),
      appletvScreenshots: item.appletvScreenshotUrls.map(imgUrl => imgUrl),
      supportedDevices: item.supportedDevices.map(device => device)
    });
    return result;
  });
  return result;
};

// Scrape game data from app-store
exports.getGameData = async paramsObj => {
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
    const result = gameInfo(getFullData);

    return result;
  } catch (e) {
    console.error("error fetching data: ", e);
  }
};
