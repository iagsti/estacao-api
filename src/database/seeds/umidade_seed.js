const UmidadeFactory = require('../factory/umidade_factory');

const umidadeFactory = new UmidadeFactory();

exports.seed = function(knex) {
  return knex('umidade').del()
    .then(function () {
      return knex('umidade').insert(umidadeFactory.generateFakeData(1));
    });
};
