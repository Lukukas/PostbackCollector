const express = require('express');
const buckets = require('./router/buckets.js');
const app = express();
app.use('/buckets', buckets);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('OK!!!');
});
app.listen(port);