const express = require('express');
const app = express();
const route = require('./route/route');
const path = require('path');
const publicDirectory = path.join(__dirname, 'style');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));
app.use(route);

//Passa url encriptografada
app.use(express.urlencoded({ extended: false}));
//Passa json Body client
app.use(express.json())


app.listen(3000, () => {
    console.log("START")
})