const { newUser } = require('../services/users');

exports.newUser = (req, res, next) => {
  newUser(req.body)
    .then(user => res.status(201).send(user))
    .catch(next);
};
