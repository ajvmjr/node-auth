const authController = require('../controllers/auth/index');

const authRoute = (app) => {
  const controller = authController();
  app.route('/auth').post(controller.login);
};

module.exports = authRoute;
