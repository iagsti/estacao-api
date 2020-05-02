const request = require('supertest');
const app = require('../app');
const DadosFactory = require('../database/factory/dados_factory');
const connection = require('../database/connections');

let factory = new DadosFactory();
let dados = factory.generateFakeDados(1);

beforeEach(async () => {
    await connection.connection('dados').insert(dados);
});

afterEach(async () => {
    await connection.connection('dados').del();
});

describe('Test temperatura/maxima', () => {
    const url = '/temperatura/maxima';

    test('Status code should be 200', () => {
        return request(app).get(url).then(response => {
            expect(response.statusCode).toBe(200);
        });
    });

    test('tmax should be equal faked value', () => {
        return request(app).get(url).then(response => {
            expect(response.body).toEqual({maxima: dados[0].tmax});
        });
    });
});

describe('Test temperatura/minima endpoint', () => {
    const url = '/temperatura/minima';

    test('status code should be 200', () => {
        return request(app).get(url).then(response => {
            expect(response.statusCode).toBe(200);
        });
    });

    test('tmin should be equal faked value', () => {
        return request(app).get(url).then(response => {
            expect(response.body).toEqual({minima: dados[0].tmin});
        });
    });
});