const axios = require('axios');
const { logger } = require('express-wolox-logger');
const config = require('../../config').common.weet;

module.exports.getRandomWeet = function getRandomWeet() {
  return axios
    .get(`${config.url}/random`)
    .then(res => res.data.data[0].quoteText)
    .catch(error => {
      logger.error(error);
      throw new Error('An error has occurred when trying to get a Weet');
    });
};
