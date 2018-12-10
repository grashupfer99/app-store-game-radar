"use strict";

const axios = require("axios");

exports.getResultData = async url => {
    try {
        const getData = await axios.get(url);
        return getData.data;
    } catch(error){
        console.log(error.response)
    }
};
