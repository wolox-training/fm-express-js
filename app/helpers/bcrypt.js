/* eslint-disable no-return-await */
/* eslint-disable require-atomic-updates */
const bcrypt = require('bcryptjs');
const config = require('../../config').common.salt;

const helpers = {};

helpers.encryptPassword = async userData => {
  const salt = await bcrypt.genSalt(config.roundsSalt);
  userData.password = await bcrypt.hash(userData.password, salt);
  return userData;
};

helpers.matchPassword = async (password, SavedPassword) => await bcrypt.compare(password, SavedPassword);

module.exports = helpers;
