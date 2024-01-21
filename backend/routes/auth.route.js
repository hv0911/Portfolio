const express = require('express');
const { login, logout, contactMe } = require('../controllers/auth.controller');
const { isAuthenticate } = require('../middlewares/isAuthenticate.middleware');

const router = express.Router();

router.post('/login', login);

router.post('/logout', isAuthenticate, logout);

router.post("/contact", contactMe);

module.exports = router;