require('custom-env').env(process.env.ENVIRONMENT)
const express = require('express')
const app = express()
const accountRouter = require('./api/account-router')

/**
 * Bruce RIP
 */
app.use(express.json())
app.use('/v1/account', accountRouter);

module.exports = app;