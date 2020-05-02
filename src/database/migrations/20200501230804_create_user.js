
exports.up = function(knex) {
  knex.schema.createTable('users', table => {
      table.string('id').primary();
      table.string('username');
      table.string('password');
      table.string('email');
      table.string('apikey');
  });
};

exports.down = function(knex) {
    knex.schema.dropTable('users');
};
