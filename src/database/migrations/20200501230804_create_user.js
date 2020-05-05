
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.string('id').primary();
      table.string('username');
      table.string('password');
      table.string('email');
      table.string('apikey');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
