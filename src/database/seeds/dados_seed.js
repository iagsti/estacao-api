const DadosFactory = require('../factory/dados_factory');

const dados =  new DadosFactory()

exports.seed = function(knex) {
  return knex('dados').del()
    .then(function () {
      return knex('dados').insert(dados.generateFakeDados(1));
    });
};
