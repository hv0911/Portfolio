const { createProject, deleteProject, updateProject } = require('../controllers/project.controller')
const express = require("express");
const { isAuthenticate } = require('../middlewares/isAuthenticate.middleware');
const router = express.Router();

router.post('/', isAuthenticate, createProject);

router.route('/:id', isAuthenticate).delete(deleteProject).post(updateProject);

module.exports = router;