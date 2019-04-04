const express = require('express');
const buckets = require('./router/buckets.js');
const basicAuth = require('express-basic-auth');
const app = express();
let config;

if (process.env.USER && process.env.PASSWORD) {
    config.user = process.env.USER;
    config.password = process.env.PASSWORD;
} else {
    config = require('./config.json');
}

app.use(basicAuth({
    users: { [config.user] : config.password }
}));

app.use('/buckets', buckets);

const port = process.env.PORT || 3000;

app.listen(port);