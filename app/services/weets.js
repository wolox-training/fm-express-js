const axios = require('axios');
const { logger } = require('express-wolox-logger');
const config = require('../../config').common.weet;

module.exports.getRandomWeet = function getRandomWeet() {
  return axios
    .get(`${config.url}/random`)

    .then(res => {
      logger.info('sending historical phrase random');
      return res.data.data[0].quoteText;
    })
    .catch(error => {
      logger.error(error);
      return error;
    });
};
