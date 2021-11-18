const { healthCheck } = require('./controllers/healthCheck');
const { newUser } = require('./controllers/user');
const { validateSchemaAndFail } = require('./middlewares/params_validators');
const { createUserSchema } = require('./schemas/users');

exports.init = app => {
  app.get('/health', healthCheck);
  app.post('/user', validateSchemaAndFail(createUserSchema), newUser);
};
