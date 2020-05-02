const faker = require('faker');

module.exports = class DadosFactory {
    makeDados(){

        let dados = {
            "data": faker.date.between('2019-01-10', '2020-01-01'),
            "vis": faker.random.number(7),
            "tipob": faker.random.arrayElement(['Sc/Cu', 'Sc']),
            "qtdb": faker.random.number(7),
            "tipom": faker.random.arrayElement(['Ac', 'Ac/As']),
            "qtdm": faker.random.number(7),
            "tipoa": faker.random.word('Ci'),
            "qtda": faker.random.number(7),
            "dir": faker.random.arrayElement(['WNW', 'NW', 'C', 'SW', 'S', 'N', 'E', 'ESE']),
            "vento": faker.random.number(10),
            "temp_bar": faker.random.number({min: 21, max: 24}),
            "pressao": faker.random.number({min: 693, max: 698}),
            "tseco": faker.random.number(25),
            "tumido": faker.random.number(20),
            "tsfc": faker.random.number({min: 20, max:25}),
            "t5cm": faker.random.number({min: 20, max: 25}),
            "t10cm": faker.random.number({min: 20, max: 25}),
            "t20cm": faker.random.number({min: 20, max: 25}),
            "t30cm": faker.random.number({min: 20, max: 25}),
            "t40cm": faker.random.number({min: 20, max: 25}),
            "piche": faker.random.number({min: 20, max: 25}),
            "evap_piche": faker.random.number({min: 20, max: 25}),
            "evap_piche_ar": faker.random.number({min: 20, max: 25}),
            "tmax": faker.random.number({min: 20, max: 25}),
            "tmin": faker.random.number({min: 20, max: 25})
        }

        return dados;
    }

    generateFakeDados(number) {
        let fakeData = [];
        for(let i = 0; i < number; i++){
            fakeData.push(this.makeDados())
        }
        return fakeData;
    }


}

