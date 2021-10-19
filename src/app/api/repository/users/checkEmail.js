const db = require('../../../database/connect');

const checkEmail = async (email) => {
  const [row] = await db.query(`
    SELECT * FROM Users
    Where Email = $1
  `, [email]);
  return row;
};

module.exports = checkEmail;
