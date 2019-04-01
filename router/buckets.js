const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const keyVStore = require('scattered-store');
const path = require('path');
const folder = path.join(__dirname, 'myStore');
const Toolbox = require('../toolbox');

const store = keyVStore.create(folder, (err) => {
    if (err) {
        throw new Error(err);
    }
});


router.post('/buckets', async (req, res) => {
    const bucketId = Toolbox.createRandomString();
    await store.set(bucketId, []);
    res.statusCode = 201;
    res.json({
        "bucketId": bucketId
    });
});

router.get('/buckets/:bucketId', async (req, res) => {
    const data = await store.get(req.params.bucketId);
    res.json({postbacks: data});
});

router.delete('/buckets/:bucketId', async (req, res) => {
    await store.delete(req.params.bucketId);
    res.statusCode = 204;
    res.send();
});

router.post('/buckets/:bucketId', async (req, res) => {
    const dataArr = await store.get(req.params.bucketId);
    dataArr.push(req.body);
    await store.set(req.params.bucketId, dataArr);
    res.statusCode = 201;
    res.send();
});

module.exports = router;