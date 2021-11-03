const { healthCheck } = require('./controllers/healthCheck');
const { newUser } = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/new-user', newUser);
};
