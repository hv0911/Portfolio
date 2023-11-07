const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const apiRoutes = require('./routes/index.route')

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/config/config.env' });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
// routes
// app.use('/api/v1', authRouter);
// app.use('/api/v1/project', projectRouter);
// app.use('/api/v1/experience', experienceRouter);

app.use('/api/v1', apiRoutes);

app.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = app;