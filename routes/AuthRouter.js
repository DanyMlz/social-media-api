const { getAuth } = require('../controllers/Auth');

const authRouter = require('express').Router();

authRouter.get('/', getAuth)

module.exports = authRouter;