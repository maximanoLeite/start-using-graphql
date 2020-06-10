
exports.up = async function(knex) {
  return await knex.schema.createTable('users', table => {
    table
      .increments('id')
      .primary();

    table
      .string('name', 50)
      .notNullable();

    table
      .string('email', 80)
      .notNullable();


  });
};

exports.down = async function(knex) {
  return await knex.schema.dropTable('users');
};
