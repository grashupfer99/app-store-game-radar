const collection = require("./config");
const methods = {
  getFullData: require("./common")
};

module.exports = Object.assign(methods, collection);
