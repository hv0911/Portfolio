const express = require("express");
const { isAuthenticate } = require("../middlewares/isAuthenticate.middleware");
const { createExprience, getAllExperiences, updateExperience, deleteExperience } = require("../controllers/experience.controller");

const router = express.Router();

router.route("/",isAuthenticate).post(createExprience);

router.get('/',getAllExperiences);

router.post('/:id',isAuthenticate,updateExperience);

router.delete('/:id',isAuthenticate,deleteExperience);

module.exports = router;