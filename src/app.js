const gameData = require("../src/gameData").gameData;
const fetchData = require("../src/fetchData").fetchData;
const type = require("../src/config");

const gamesURL = "https://rss.itunes.apple.com/api/v1/";
const lookUpURL = "https://itunes.apple.com/lookup";

// Extract and join game IDs
const joinGameIds = (data) => {
    const ids = data.map(game => game.id);
    const joinIds = ids.map(id => id).join(",");
    return joinIds;
};

// Scrape data from App-Store
const gameScraper = async params => {
    params.explicit ? "explicit" : "non-explicit";
    const appStoreUrl = `${gamesURL}${params.country}/${type.media.iosApps}/${params.feedType}/${params.num}/${params.explicit}.json`;

    const getGames = await fetchData(appStoreUrl);
    const fullDataUrl = `${lookUpURL}?id=${joinGameIds(getGames.feed.results)}&country=${params.country}`;  
    const getFullGameData = await fetchData(fullDataUrl);
    const result = gameData(getFullGameData);

    return result;
};

module.exports = { joinGameIds, gameScraper };
