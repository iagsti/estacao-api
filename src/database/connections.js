const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);
const connecttionLocal = knex(configuration.development_local);

module.exports = {connection, connecttionLocal};
