const mongo = require('mongoose')

mongo.connect('mongodb://localhost:27017/api-pdf',  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

var db = mongo.connection;

module.exports = db;