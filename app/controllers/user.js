const { newUser } = require('../services/users');

exports.newUser = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  newUser({ firstName, lastName, email, password })
    .then(() => 'created user')
    .catch(next);
};
