
const util = require('../lib/utils.js');
const test = require('../controllers/test/');


module.exports = function (app) {
  app.options('/api/test/', util.asJSON, util.options);
  app.get('/api/test/some', util.asJSON, test.someData);
  app.post('/api/test/posted', util.asJSON, test.somePostedData)

};