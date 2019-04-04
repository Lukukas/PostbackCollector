const express = require('express');
const buckets = require('./router/buckets.js');
const basicAuth = require('express-basic-auth');
const app = express();
let config;

if (process.env.user && process.env.password) {
    config.user = process.env.user;
    config.password = process.env.password;
} else {
    config = require('./config.json');
}

app.use(basicAuth({
    users: { [config.user] : config.password }
}));

app.use('/buckets', buckets);

const port = process.env.PORT || 3000;

app.listen(port);