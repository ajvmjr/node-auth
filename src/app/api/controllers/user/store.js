const bcrypt = require('bcryptjs');
const userRepository = require('../../repository/users/index');

const store = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  const emailExists = await userRepository.checkEmailExistance(email);

  if (emailExists) {
    return res.status(400).json({ error: 'Email alredy exists' });
  }

  const encryptedPassword = bcrypt.hashSync(password, 8);

  const userCreated = await userRepository.create({
    name, email, password: encryptedPassword,
  });

  return res.json(userCreated);
};

module.exports = store;
