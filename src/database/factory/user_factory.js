const faker = require('faker');

module.exports = class UmidadeFactory {
    
    makeData() {
        return {
            username: faker.internet.userName('Marc', 'Strung'),
            password: faker.internet.password(4, true),
            email: faker.internet.email('Marc', 'Strung', 'google'),
            apikey: faker.internet.password(6, false)
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