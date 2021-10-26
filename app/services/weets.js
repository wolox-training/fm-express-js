const axios = require('axios');
const { logger } = require('express-wolox-logger');

const apiURL = process.env.API_URL;

module.exports.getRandomWeet = async function getRandomWeet() {
  const {
    data: {
      data: [{ quoteText }]
    }
  } = await axios.get(`${apiURL}/random`);
  logger.info('sending historical phrase random');
  return quoteText;
};
