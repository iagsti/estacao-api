
exports.up = function(knex) {
    return knex.schema.createTable('umidade', (table) => {
        table.datetime('data');
        table.float('ur');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('umidade');
};
