
exports.up = function(knex) {
    return knex.schema.createTable('dados', function(table) {
        table.datetime('data');
        table.integer('vis');
        table.string('tipob', 12);
        table.integer('qtdb');
        table.string('tipom', 12);
        table.integer('qtdm', 4);
        table.string('tipoa', 12);
        table.integer('qtda', 4);
        table.string('dir', 12);
        table.float('vento');
        table.float('temp_bar');
        table.float('pressao');
        table.float('tseco');
        table.float('tumido');
        table.float('tsfc');
        table.float('t5cm');
        table.float('t10cm');
        table.float('t20cm');
        table.float('t30cm');
        table.float('t40cm');
        table.float('piche');
        table.float('evap_piche');
        table.float('piche_ar');
        table.float('evap_piche_ar');
        table.float('tmax');
        table.float('tmin');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('dados');
};
