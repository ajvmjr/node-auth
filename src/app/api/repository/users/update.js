const db = require('../../../database/connect');

const update = async ({
  name, email, password, id,
}) => {
  const [row] = await db.query(`
    UPDATE users
    SET name = $1,
        email = $2,
        password = $3
    WHERE id = $4
    RETURNING *
  `, [name, email, password, id]);
  return row;
};

module.exports = update;
