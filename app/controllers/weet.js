const weet = require('../services/weet');

exports.getWeet = async (_, res) => {
  // eslint-disable-next-line no-undef
  const result = await weet.getRandomWeet();
  res.status(200).json(result);
};
