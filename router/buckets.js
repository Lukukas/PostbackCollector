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
    try {
        await store.set(bucketId, []);
        res.statusCode = 201;
        res.json({
            "bucketId": bucketId
        });
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

router.get('/', async (req, res) => {
    try {
        const stream = store.getAll();
        let arr = [];
        stream.on('readable', () => {
            const entry = stream.read();
            if(entry !== null) {
                arr.push(entry.key);
            }
        });
        stream.on('end', () => {
            res.json({ keys: arr });
        });
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

router.get('/:bucketId', async (req, res) => {
    try {
        const data = await store.get(req.params.bucketId);
        if (data) {
            res.json({postbacks: data});
        } else {
            res.statusCode = 404;
            res.send();
        }
        
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

router.get('/:bucketId/latest', async (req, res) => {
    try {
        const data = await store.get(req.params.bucketId);
        if (data) {
            res.json({postback: data[data.length-1]});
        } else {
            res.statusCode = 404;
            res.send();
        }
        
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

router.delete('/:bucketId', async (req, res) => {
    try {
        const check = await store.get(req.params.bucketId);
        if (check) {
            await store.delete(req.params.bucketId);
            res.statusCode = 204;
            res.send();
        } else {
            res.statusCode = 404;
            res.send();
        }
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

router.post('/:bucketId', async (req, res) => {
    try {
        const dataArr = await store.get(req.params.bucketId);
        if (dataArr) {
            if (req.headers['content-type'] === 'application/json') {
                dataArr.push(req.body);
                await store.set(req.params.bucketId, dataArr);
                res.statusCode = 201;
                res.send();
            } else {
                const decodedBody = decodeURIComponent(req.body).replace(/\+/g, ' ');
                const bodyObject = convert.xml2js(decodedBody, { compact: true, textKey: 'value', attributesKey: 'value', commentKey: 'value' });
                dataArr.push(bodyObject);
                await store.set(req.params.bucketId, dataArr);
                res.statusCode = 201;
                res.send();
            }
        } else {
            res.statusCode = 404;
            res.send();
        }
    } catch (e) {
        res.statusCode = 500;
        res.json({ "error": "something went wrong :("})
        console.log(e);
    }
});

module.exports = router;
