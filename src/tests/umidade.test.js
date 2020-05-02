const request = require('supertest');
const app = require('../app');
const UmidadeFactory = require('../database/factory/umidade_factory');
const connection = require('../database/connections');


const factory = new UmidadeFactory();
const umidade = factory.generateFakeData(1)


beforeEach(async () => {
    await connection.connection('umidade').insert(umidade);
});

afterEach(async () => {
    await connection.connection('umidade').del();
});


describe('Test umidade/relativa', () => {
    const url = '/umidade/relativa';

    test('Status code should be 200', () => {
        return request(app).get(url).then(response => {
            expect(response.statusCode).toBe(200);
        });
    });

    test('Umidade relativa should be equal faked data', () =>{
        return request(app).get(url).then(response => {
            expect(response.body).toEqual({umidade: -99}); 
        });
    });
});
