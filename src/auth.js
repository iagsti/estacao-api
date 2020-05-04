const passport = require('passport');
const passportJwt = require('passport-jwt');
const config = require('./config');
const connections = require('./database/connections');

const ExtractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;  

const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = () => {
    let strategy = new  Strategy(params, (payload, done) => {
        let user = connections('users').where('id', payload.id) || null;
        if(user) {
            return done(null, {id: user.id});
        } else {
            return done(new Error('User not found'), null);
        }
    });

    passport.use(strategy);

    return {
        initialize: () => {
            return passport.initialize();
        },

        authenticate: () => {
            return passport.authenticate('jwt', config.jwtSession);
        }
    };
}