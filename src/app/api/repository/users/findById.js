const db = require('../../../database/connect');

const findById = async (id) => {
  const [row] = await db.query(`
    SELECT * FROM Users
    WHERE id = $1
  `, [id]);
  return row;
};

module.exports = findById;
