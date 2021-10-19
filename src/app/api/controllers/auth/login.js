const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../../repository/users/index');
require('dotenv').config();

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  const user = await userRepository.findOne(email);

  if (!user) {
    return res.sendStatus(401);
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.sendStatus(401);
  }

  const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' });

  delete user.password;

  return res.json({
    user,
    token,
  });
};

module.exports = login;
