const jwt = require('jsonwebtoken');

exports.generateToken = (email) => {
    console.log('here', process.env.SECRET_KEY)
    return jwt.sign({ email: email }, process.env.SECRET_KEY)
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY)
}