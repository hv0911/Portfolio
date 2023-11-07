const { Experience } = require('../models/db.config')

exports.createExprience = async (req, res) => {
    try {
        const experienc = await Experience.create({
            campany: req.body.campany,
            designation: DataTypes.STRING,
            description: DataTypes.STRING
        })
    } catch (error) {

    }
}