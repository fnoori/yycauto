'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_ROUTE: '"http://localhost:3000/"',
    GOOGLE_BUCKET: '"https://storage.cloud.google.com/yycauto/uploads/"'
})
