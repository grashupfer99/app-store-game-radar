"use strict";

const maxLen = (a, b) => a.length >= b.length ? a : b;

const gameData = (data, fullDetails) => {
    let result = [];
    if(fullDetails) {
        result = data.map(item => {
            let scIpad = item.ipadScreenshotUrls, sc = item.screenshotUrls;
            return {
                id: item.trackId,
                appId: item.bundleId,
                title: item.trackName,
                url: item.trackViewUrl,
                description: item.description,
                icon: item.artworkUrl512,
                genres: item.genres,
                genreIds: item.genreIds,
                primaryGenre: item.primaryGenreName,
                primaryGenreId: item.primaryGenreId,
                contentRating: item.trackContentRating,
                languages: item.languageCodesISO2A,
                size: item.fileSizeBytes,
                requiredOsVersion: item.minimumOsVersion,
                released: item.releaseDate,
                updated: item.currentVersionReleaseDate,
                releaseNotes: item.releaseNotes,
                version: item.version,
                price: item.price,
                currency: item.currency,
                free: item.price === 0 ? true : false,
                developerId: item.artistId,
                developer: item.artistName,
                developerUrl: item.artistViewUrl,
                developerWebsite: null,
                score: (!item.averageUserRating) ? 0 : item.averageUserRating,
                reviews: (!item.userRatingCount) ? 0 : item.userRatingCount,
                currentVersionScore: item.averageUserRatingForCurrentVersion,
                currentVersionReviews: item.userRatingCountForCurrentVersion,
                screenshots: maxLen(scIpad, sc).map(imgUrl => imgUrl),
                ipadScreenshots: item.ipadScreenshotUrls,
                appletvScreenshots: item.appletvScreenshotUrls,
                supportedDevices: item.supportedDevices
            };
        });
    } else {
        result = data.map(item => {
            return {
                id: item.trackId,
                appId: item.bundleId,
                title: item.trackName,
                url: item.trackViewUrl,
                description: item.description,
                icon: item.artworkUrl512,
                genres: item.genres,
                genreIds: item.genreIds,
                released: item.releaseDate,
                developerId: item.artistId,
                developer: item.artistName,
                developerUrl: item.artistViewUrl,

            };
        });
    }
    return result;
};

module.exports = { maxLen, gameData };
