const request = require('supertest');
const app = require('../app');
const UserFactory = require('../database/factory/user_factory');
const connection = require('../database/connections');

const userFactory = new UserFactory();

beforeEach(async () => {
    await connection('users').insert(userFactory.generateFakeData(1))
});

afterEach(async () => {
    await connection('users').del()
});


describe('Test user migration', () => {
     test('users count should be 1', async () => {
         let [{count}] = await connection('users').count('*', {as: 'count'});
         return expect(count).toEqual(1);
     });
});