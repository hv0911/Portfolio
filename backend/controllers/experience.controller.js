const { Experience } = require('../models/db.config')

exports.createExprience = async (req, res) => {
    try {
        const { company, designation, description, start_date, end_date } = req.body;

        const experience = await Experience.create({
            company: company,
            designation: designation,
            description: description,
            start_date: start_date,
            end_date: end_date,
        })

        return res.status(201).json({
            success: true,
            message: "Experience Added!",
            experience: experience
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.updateExperience = async (req, res) => {
    try {

        const { company, designation, description, start_date, end_date } = req.body;

        const experience = await Experience.update({
            company: company,
            designation: designation,
            description: description,
            start_date: start_date,
            end_date: end_date,
        }, {
            where: { id: req.params.id }
        })

        return res.status(201).json({
            success: true,
            message: "Experience Updated!",
            experience: experience
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.deleteExperience = async (req, res) => {
    try {
        const { id } = req.params.id;

        await Project.destroy({ where: { id: id } });

        return res.status(201).json({
            success: true,
            message: "Experience Removed!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.getAllProjects = async (req, res) => {
    try {
        const experiences = await Experience.findAll();

        return res.status(201).json({
            success: true,
            experiences: experiences,
        })

    } catch (error) {
        res.status(501).json({
            success: false,
            error: error.message
        });
    }
}

