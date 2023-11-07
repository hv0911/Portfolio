const express = require('express');
const apiRoutes = express.Router()
const authRouter = require('./auth.route');
const projectRouter = require('./project.route');
const experienceRouter = require('./experience.route')

apiRoutes.use('/', authRouter);
apiRoutes.use('/project', projectRouter);
apiRoutes.use('/experience', experienceRouter);

module.exports = apiRoutes;