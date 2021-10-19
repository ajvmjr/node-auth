const userController = require('../controllers/user/index');
const authMiddleware = require('../../middlewares/authMiddleware');

const userRoutes = (app) => {
  const controller = userController();

  app.route('/create').post(controller.create);
  app.route('/update').put(authMiddleware, controller.update);
};

module.exports = userRoutes;
