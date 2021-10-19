const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = data.id;
    return next();
  } catch (e) {
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;
