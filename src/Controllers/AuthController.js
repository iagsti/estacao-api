const connection = require('../database/connections');
const jwt = require('jwt-simple');
const config = require('../config');

module.exports = {
    token(request, response) {
        if(request.headers.username && request.headers.password) {
            let username = request.headers.username;
            let password = request.headers.password;
            let user = connection('users').where({username: username, password:password});

            if(user) {
                let payload = {id: user.id};
                let token = jwt.encode(payload, config.jwtSecret)
                return response.json(token); 
            } else {
                return response.sendStatus(401);

            }
        } else {
            return response.sendStatus(401);
        }
    }
}