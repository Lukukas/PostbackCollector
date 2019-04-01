const express = require('express');
const buckets = require('./router/buckets.js');
const app = express();
app.use('/buckets', buckets);

app.listen(3000);