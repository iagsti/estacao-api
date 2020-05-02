const connection = require('../database/connections');

module.exports = {
    async tmax(request, response) {
        const [{tmax}] = await connection('dados').max('tmax').select('tmax');
        return response.json({maxima: tmax});
    },

    async tmin(request, response) {
        const [{tmin}] = await connection('dados').min('tmin').select('tmin');
        return response.json({minima: tmin});
    },

}