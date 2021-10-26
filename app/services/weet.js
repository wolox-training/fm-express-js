const axios = require('axios');

module.exports.getRandomWeet = async function getRandomWeet() {
  // name is preferred by linter
  const {
    data: {
      data: [{ quoteText }]
    }
  } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');
  return quoteText;
};
