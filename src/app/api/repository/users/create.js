const db = require('../../../database/connect');

const create = async ({ name, email, password }) => {
  const [row] = await db.query(
    `INSERT INTO Users(name, email, password)
    VALUES($1, $2, $3)
    RETURNING *`, [name, email, password],
  );
  return row;
};

module.exports = create;
