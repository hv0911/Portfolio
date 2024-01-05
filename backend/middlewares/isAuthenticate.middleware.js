const { User } = require('../models/db.config')
const { verifyToken } = require('../util/jwt.util')

exports.isAuthenticate = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Please login First"
            })
        }

        const decode = await verifyToken(token);
        console.log(decode)
        const user = await User.findOne({ where: { email: decode.email } })
        req.user = user.dataValues;
        await next();
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success: false,
            message: error.message
        })
    }
}