const axios = require('axios');

exports.healthCheck = (_, res) => res.status(200).send({ uptime: process.uptime() });

exports.getOnesentence = async (_, res) => {
  const {
    data: {
      data: [{ quoteText, quoteAuthor }]
    }
  } = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random');

  res.status(200).json({ sentence: quoteText, author: quoteAuthor });
};
