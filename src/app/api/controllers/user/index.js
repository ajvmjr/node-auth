const store = require('./store');
const update = require('./update');

const userController = () => {
  const controller = {};

  controller.create = store;
  controller.update = update;

  return controller;
};

module.exports = userController;
