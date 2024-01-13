const cloudinary = require("cloudinary");
const { storage } = require('../util/stotage.util');
const multer = require('multer');
const upload = multer({ storage });
const { Experience } = require('../models/db.config')

exports.createExprience = [upload.single('image'), async (req, res) => {
    try {
        console.log(req.file.path)
        const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: "experiences",
        });

        console.log(myCloud);

        if (!myCloud || !myCloud.secure_url) {
            console.error("Cloudinary upload failed:", myCloud);
            return res.status(400).json({
                success: false,
                error: "Cloudinary upload failed",
            });
        }
        const { company, designation, description, start_date, end_date } = req.body;

        const experience = await Experience.create({
            company: company,
            designation: designation,
            description: description,
            start_date: start_date,
            end_date: end_date,
            experience_image_url: myCloud.secure_url,
            experience_image_public_id: myCloud.public_id,
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
}]

exports.updateExperience = [upload.single('image'), async (req, res) => {
    try {

        const { id } = req.params;

        const { dataValues } = await Experience.findOne({ where: { id: id } });

        await cloudinary.v2.uploader.destroy(dataValues.project_image_public_id, (err, result) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "Failed to delete project"
                })
            } else {
                console.log("Deleted");
            }
        })

        const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: "experiences",
        });

        if (!myCloud || !myCloud.secure_url) {
            console.error("Cloudinary upload failed:", myCloud);
            return res.status(400).json({
                success: false,
                error: "Cloudinary upload failed",
            });
        }

        const { company, designation, description, start_date, end_date } = req.body;

        const experience = await Experience.update({
            company: company,
            designation: designation,
            description: description,
            start_date: start_date,
            end_date: end_date,
            experience_image_url: myCloud.secure_url,
            experience_image_public_id: myCloud.public_id,
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
}]

exports.deleteExperience = async (req, res) => {
    try {
        const { id } = req.params.id;

        await cloudinary.v2.uploader.destroy(dataValues.project_image_public_id, (err, result) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "Failed to delete Experience"
                })
            } else {
                console.log("Deleted");
            }
        })

        await Experience.destroy({ where: { id: id } });

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


exports.getAllExperiences = async (req, res) => {
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

