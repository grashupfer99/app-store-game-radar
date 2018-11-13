const https = require("https");

exports.fetchData = url => {
    // Wrapper to return body through a Promise
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => (body += data));
            res
                .on("end", () => {
                    body = JSON.parse(body);
                    return resolve(body);
                })
                .on("error", reject);
        });
    });
};
