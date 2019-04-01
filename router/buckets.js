const express = require('express');
const bodyParser = require('body-parser');
const convert = require('xml-js');
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.text({ type: `text/*` }));
const keyVStore = require('scattered-store');
const path = require('path');
const folder = path.join(__dirname, '..', 'myStore');
const Toolbox = require('../toolbox');

const store = keyVStore.create(folder, (err) => {
    if (err) {
        throw new Error(err);
    }
});


router.post('/', async (req, res) => {
    const bucketId = Toolbox.createRandomString();
    await store.set(bucketId, []);
    res.statusCode = 201;
    res.json({
        "bucketId": bucketId
    });
});

router.get('/:bucketId', async (req, res) => {
    const data = await store.get(req.params.bucketId);
    res.json({postbacks: data});
});

router.get('/:bucketId/latest', async (req, res) => {
    const data = await store.get(req.params.bucketId);
    res.json({postback: data[data.length-1]});
});

router.delete('/:bucketId', async (req, res) => {
    await store.delete(req.params.bucketId);
    res.statusCode = 204;
    res.send();
});

router.post('/:bucketId', async (req, res) => {
    const dataArr = await store.get(req.params.bucketId);
    const decodedBody = decodeURIComponent(req.body).replace(/\+/g, ' ');
    const bodyObject = convert.xml2js(decodedBody, { compact: true, textKey: 'value', attributesKey: 'value', commentKey: 'value' });
    dataArr.push(bodyObject);
    await store.set(req.params.bucketId, dataArr);
    res.statusCode = 201;
    res.send();
});

module.exports = router;