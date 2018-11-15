"use strict";

const gameData = require("../src/gameData").gameData;
const fetchData = require("../src/fetchData").fetchData;
const type = require("../src/config");
const gamesURL = "https://rss.itunes.apple.com/api/v1";
const lookUpURL = "https://itunes.apple.com/lookup";

// Extract and join game IDs
const joinGameIds = (data) => {
    const ids = data.map(game => game.id);
    const joinIds = ids.map(id => id).join(",");

    return joinIds;
};

// Scrape data from App-Store
const gameScraper = async ({country="us", category = type.feed.topFree, num = 200, fullDetails = false} = {}) => {
    const appStoreUrl = `${gamesURL}/${country}/${type.media.iosApps}/${category}/${num}/explicit.json`;
    const getGames = await fetchData(appStoreUrl);
    const fullDataUrl = `${lookUpURL}?id=${joinGameIds(getGames.feed.results)}&country=${country}`;  
    const getFullGameData = await fetchData(fullDataUrl);
    const result = gameData(getFullGameData.results, fullDetails);

    return result;
};

module.exports = { joinGameIds, gameScraper };
