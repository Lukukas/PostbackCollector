const express = require('express');
const buckets = require('./router/buckets.js');
const unsecureBuckets = require('./router/unsecureBuckets.js');
const basicAuth = require('express-basic-auth');
const app = express();

app.use('/buckets', buckets);
app.use('/unsecureBuckets', unsecureBuckets);

const port = process.env.PORT || 3000;

app.listen(port);
