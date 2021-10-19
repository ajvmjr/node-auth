const bcrypt = require('bcryptjs');
const userRepository = require('../../repository/users/index');

const update = async (req, res) => {
  let { name, email, password } = req.body;

  const user = await userRepository.findById(req.userId);

  if (!name) {
    name = user.name;
  }

  if (!email) {
    email = user.email;
  }

  if (!password) {
    password = user.password;
  } else {
    password = bcrypt.hashSync(password, 8);
  }

  const updatedUser = await userRepository.update({
    id: req.userId,
    name,
    email,
    password,
  });

  delete updatedUser.password;

  res.status(200).json(updatedUser);
};

module.exports = update;
