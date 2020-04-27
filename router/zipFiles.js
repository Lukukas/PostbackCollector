const express = require('express');
const router = express.Router();
const path = require('path');
const zips = path.join(__dirname, '..', 'zips');
const Toolbox = require('../toolbox');

router.get('/aicc', (req, res) => {
    const zip = path.join(zips, 'AICC.zip');
    res.download(zip);
});

router.get('/cmi5', (req, res) => {
    const zip = path.join(zips, 'cmi5.zip');
    res.download(zip);
});

router.get('/scorm12', (req, res) => {
    const zip = path.join(zips, 'SCORM12.zip');
    res.download(zip);
});

router.get('/scorm20043rd', (req, res) => {
    const zip = path.join(zips, 'SCORM20043rdEdition.zip');
    res.download(zip);
});

router.get('/xapi', (req, res) => {
    const zip = path.join(zips, 'xAPI.zip');
    res.download(zip);
});

router.get('/notazip', (req, res) => {
    const zip = path.join(zips, 'notAZip.csv');
    res.download(zip);
});

router.get('/withexe', (req, res) => {
    const zip = path.join(zips, 'SCORM12WITHEXE.zip');
    res.download(zip);
});

router.get('/witheicar', (req, res) => {
    const zip = path.join(zips, 'SCORM12WITHEICAR.zip');
    res.download(zip);
});

router.get('/withhiddenexe', (req, res) => {
    const zip = path.join(zips, 'SCORM12WITHHIDDENEXE.zip');
    res.download(zip);
});

router.get('/withhiddeneicar', (req, res) => {
    const zip = path.join(zips, 'SCORM12WITHHIDDENEICAR.zip');
    res.download(zip);
});

module.exports = router;
