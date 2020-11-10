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

router.get('/mp4', (req, res) => {
    const zip = path.join(zips, 'Api Automation URL MP4 Course.mp4');
    res.download(zip);
});

router.get('/mp3', (req, res) => {
    const zip = path.join(zips, 'Api Automation URL MP3 Course.mp3');
    res.download(zip);
});

router.get('/pdf', (req, res) => {
    const zip = path.join(zips, 'Api Automation URL PDF Course.pdf');
    res.download(zip);
});

router.get('/scorm12.zip', (req, res) => {
    const zip = path.join(zips, 'SCORM12.zip');
    res.download(zip);
});

router.get('/NewFile', (req, res) => {
    const file = path.join(zips, 'NewFile.html');
    res.download(file);
});

router.get('/Playing', (req, res) => {
    const file = path.join(zips, 'Playing.html');
    res.download(file);
});

router.get('/PlayingVersion', (req, res) => {
    const file = path.join(zips, 'PlayingVersion.html');
    res.download(file);
});

module.exports = router;
