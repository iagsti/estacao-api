const faker = require('faker');

module.exports = class UmidadeFactory {
    
    makeData() {
        return {
            data: faker.date.between(2, '2020-04-01'),
            ur: -99
        }
    }

    generateFakeData(number) {
        let fakeData = [];
            for(let i = 0; i < number; i++){
                fakeData.push(this.makeData())
            }
        return fakeData;
    }
}