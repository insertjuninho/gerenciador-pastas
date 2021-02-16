const express = require('express')
const route =    express.Router();
const pdf =      require('../controller/indexController');
const  upload  = require('../controller/upload');

route.get('/', (req, res) => {
    res.render("view")
});

route.get('/arquivo', (req, res) => {
    res.render("arquivo")
});

route.post('/upload', upload.upload)
route.get('/pdf', pdf.index);

module.exports = route