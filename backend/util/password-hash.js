const bcrypt = require('bcrypt');

exports.hashPassword = (password) => {

    bcrypt.hash(password, 10, async (err, hashpassword) => {
        if (err) {
            throw new Error('Err in Password Hashing: ' + err);
        } else {
            return hashpassword;
        }
    })
}