// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { getWeet } = require('./controllers/weet');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/new-weet', getWeet);
  // app.get('/endpoint/get/path', [], controller.methodGET);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
