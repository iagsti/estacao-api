const UserFactory = require('../factory/user_factory');

const userFactory = new UserFactory();

exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert(userFactory.generateFakeData(1));
    });
};
