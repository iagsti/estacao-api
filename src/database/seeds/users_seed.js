const UserFactory = require('../factory/user_factory');

const userFactory = new UserFactory();

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert(userFactory.generateFakeData(1));
    });
};
