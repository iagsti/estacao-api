const knex = require('knex');

const configurationEstacao = require('../../knexfile');
const configurationLocal = require('../../knexfile.local');

const connection = knex(configurationEstacao.development);
const connectionLocal = knex(configurationLocal.development);


module.exports = {connection, connectionLocal};
