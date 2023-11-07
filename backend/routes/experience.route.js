const express = require("express");
const { isAuthenticate } = require("../middlewares/isAuthenticate.middleware");

const router = express.Router();

router.route("/",isAuthenticate).post()

module.exports = router;