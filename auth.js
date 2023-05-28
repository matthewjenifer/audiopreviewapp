const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key'; // Replace with your own secret key

function hashPassword(password) {
const salt = bcrypt.genSaltSync(10);
return bcrypt.hashSync(password, salt);
}

function comparePasswords(password, hashedPassword) {
return bcrypt.compareSync(password, hashedPassword);
}

function generateToken(payload) {
return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

function verifyToken(token) {
try {
    return jwt.verify(token, SECRET_KEY);
} catch (error) {
    return null;
}
}

module.exports = {
hashPassword,
comparePasswords,
generateToken,
verifyToken,
};
