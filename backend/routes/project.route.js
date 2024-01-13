const { createProject, deleteProject, updateProject, getAllProjects } = require('../controllers/project.controller')
const express = require("express");
const { isAuthenticate } = require('../middlewares/isAuthenticate.middleware');
const router = express.Router();

router.post('/', isAuthenticate, createProject);

router.get('/', getAllProjects);

router.route('/:id', isAuthenticate).delete(deleteProject).post(updateProject) ;

module.exports = router;