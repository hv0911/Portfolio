const { User }  = require('../models/db.config')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = User.
        res.status(201).json({
            success: true
        })
    } catch (error) {
        res.status(501).json({
            success: false,
        })
    }
}
