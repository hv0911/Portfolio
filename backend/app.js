const express = require('express');
const app = express();
const authRouter = require('./routes/auth.route');

app.use('/api/v1',authRouter);

app.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = app;