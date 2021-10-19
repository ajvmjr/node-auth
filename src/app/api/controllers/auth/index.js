const login = require('./login');

const authController = () => {
  const controller = {};

  controller.login = login;

  return controller;
};

module.exports = authController;
