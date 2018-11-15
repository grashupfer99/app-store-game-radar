"use strict";

exports.gameData = (data, fullDetails) => {
    let result = [];
    if(fullDetails) {
        data.map(item => {
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
                free: item.price === 0 ? true : false,
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
    } else {
        data.map(item => {
            result.push({
                id: item.trackId,
                appId: item.bundleId,
                title: item.trackName,
                url: item.trackViewUrl,
                description: item.description,
                icon: item.artworkUrl512,
                genres: item.genres.map(genre => genre),
                genreIds: item.genreIds.map(genreId => genreId),
                released: item.releaseDate,
                developerId: item.artistId,
                developer: item.artistName,
                developerUrl: item.artistViewUrl,

            });
            return result;
        });
    }
    return result;
};
