const { createProject } = require('../controllers/project.controller')
const express = require("express");
const { isAuthenticate } = require('../middlewares/isAuthenticate.middleware');
const router = express.Router();

router.post('/', isAuthenticate, createProject);



module.exports = router;