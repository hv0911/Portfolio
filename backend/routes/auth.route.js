const express = require('express');
const { login, logout } = require('../controllers/auth.controler');
const { isAuthenticate } = require('../middlewares/isAuthenticate.middleware');

const router = express.Router();

router.post('/login', login);

router.post('/logout', isAuthenticate, logout);

module.exports = router;