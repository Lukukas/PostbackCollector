const express = require('express');
const buckets = require('./router/buckets.js');
const basicAuth = require('express-basic-auth');
const config = require('./config.json');
const app = express();

app.use(basicAuth({
    users: { [config.user] : config.password }
}));

app.use('/buckets', buckets);

const port = process.env.PORT || 3000;

app.listen(port);