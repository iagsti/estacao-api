require('dotenv/config');

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    jwtSecret: SECRET_KEY,
    jwtSession: {session: false}
};