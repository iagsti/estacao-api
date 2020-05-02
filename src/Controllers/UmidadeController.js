const connection = require('../database/connections');


module.exports = {
    async umidadeRelativa(request, response) {
        let [{ur}] = await connection.connection('umidade').max('data').select('ur');
        
        return response.json({umidade: ur});
    }
}