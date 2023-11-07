const cloudinary = require("cloudinary");
const { storage } = require('../util/stotage.util');
const multer = require('multer');
const upload = multer({ storage });
const { Project } = require('../models/db.config')


exports.createProject = [upload.single('image'), async (req, res) => {
    try {
        console.log(req.file.path)
        const myCloud = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: "projects",
        });

        if (!myCloud || !myCloud.secure_url) {
            console.error("Cloudinary upload failed:", myCloud);
            return res.status(400).json({
                success: false,
                error: "Cloudinary upload failed",
            });
        }

        const project = await Project.create({
            title: req.body.title,
            description: req.body.description,
            tech_stack: req.body.tech_stack,
            project_image_url: myCloud.secure_url,
            project_image_public_id: myCloud.public_id,
            source_code: req.body.source_code,
            live_url: req.body.live_url,
        });

        res.status(201).json({
            success: true,
            message: "Project Created!",
            project: project
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
            success: false,
            error: error.message
        });
    }
}];

exports.updateProject = [upload.single('image'), async (req, res) => {
    try {
        const { id } = req.params;

        const { dataValues } = await Project.findOne({ where: { id: id } });

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
            folder: "projects",
        });

        if (!myCloud || !myCloud.secure_url) {
            console.error("Cloudinary upload failed:", myCloud);
            return res.status(400).json({
                success: false,
                error: "Cloudinary upload failed",
            });
        }


        const project = await Project.update({
            title: req.body.title,
            description: req.body.description,
            tech_stack: req.body.tech_stack,
            project_image_url: myCloud.secure_url,
            project_image_public_id: myCloud.public_id,
            source_code: req.body.source_code,
            live_url: req.body.live_url,
        },
            {
                where: { id: id }
            }
        );

        res.status(201).json({
            success: true,
            message: "Project Updated!",
            project: project.dataValues
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
            success: false,
            error: error.message
        });
    }
}];

exports.deleteProject = async (req, res) => {
    try {

        const { id } = req.params;

        const { dataValues } = await Project.findOne({ where: { id: id } });

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

        const project = await Project.destroy({ where: { id: id } });

        return res.status(201).json({
            success: true,
            message: "Project Deleted!"
        })


    } catch (error) {
        res.status(501).json({
            success: false,
            error: error.message
        });
    }
}



