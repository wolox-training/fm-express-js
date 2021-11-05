const axios = require('axios');
const logger = require('../logger');

const config = require('../../config').common.weet;

exports.getRandomWeet = () =>
  axios
    .get(`${config.url}/random`)
    .then(res => res.data.data[0].quoteText)
    .catch(error => {
      logger.error(error);
      throw new Error('An error has occurred when trying to get a Weet');
    });
