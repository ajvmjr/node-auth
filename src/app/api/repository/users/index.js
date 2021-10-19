const create = require('./create');
const checkEmailExistance = require('./checkEmail');
const findOne = require('./findOne');
const update = require('./update');
const findById = require('./findById');

const repository = () => {
  const repo = {};

  repo.create = create;
  repo.checkEmailExistance = checkEmailExistance;
  repo.findOne = findOne;
  repo.update = update;
  repo.findById = findById;

  return repo;
};

module.exports = repository();
