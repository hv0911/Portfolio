const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')


const authRouter = require('./routes/auth.route');
const projectRouter = require('./routes/project.route')

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/config/config.env' });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
// routes
app.use('/api/v1', authRouter);
app.use('/api/v1/project', projectRouter)

app.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = app;