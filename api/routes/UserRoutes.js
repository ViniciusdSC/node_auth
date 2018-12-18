'use strict';

module.exports = function (app) {
  var user = require('../controllers/UserController'),
    utils = require('../utils');

  app.route('/user/login')
    .post(user.login);

  app.route('/user/cadastrar')
    .post(user.cadastrar);

  app.route('/user/getall')
    .get(utils.verifyJWT, user.getAll);
}
