const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.newUser = userData =>
  User.create(userData)
    .then(user => user)
    .catch(error => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        logger.error('Existing email');
        throw errors.mailExistError('Entered email already exists');
      }
      logger.error('Failed to connect to database');
      throw errors.databaseError(error);
    });
