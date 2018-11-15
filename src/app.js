"use strict";

const gameData = require("../src/gameData").gameData;
const fetchData = require("../src/fetchData").fetchData;
const type = require("../src/config");
const countries = require('../src/config').countries;
const gamesURL = "https://rss.itunes.apple.com/api/v1";
const lookUpURL = "https://itunes.apple.com/lookup";
// Extract and join game IDs
const joinGameIds = (data) => {
    const ids = data.map(game => game.id);
    const joinIds = ids.map(id => id).join(",");

    return joinIds;
};

const validate = (input, data) => {
  let found = false;
  return data.indexOf(input) !== -1 ? found = true : found;
} 

const paramValidator = (country, category, num) => {
  // Country 
  if(!validate(country, countries)){
      throw Error('country not found!');
    }
  // Category
  const categoryType = Object.values(type.feed);
  if(!validate(category, categoryType)){
    throw Error('category type not found!');
  }
  // Num
  if(num > 200){
    throw Error('num should be less than 200');
  }

}

// Scrape data from App-Store
const gameScraper = async ({country="us", category = type.feed.topFree, num = 200, fullDetails = false} = {}) => {
    // Validation for input parameters
    paramValidator(country, category, num);
    const appStoreUrl = `${gamesURL}/${country}/${type.media.iosApps}/${category}/${num}/explicit.json`;
    const getGames = await fetchData(appStoreUrl);
    const fullDataUrl = `${lookUpURL}?id=${joinGameIds(getGames.feed.results)}&country=${country}`;  
    const getFullGameData = await fetchData(fullDataUrl);
    const result = gameData(getFullGameData.results, fullDetails);

    return result;
};

module.exports = { joinGameIds, gameScraper, validate, paramValidator };
