const mongoose = require('mongoose');
const URL = 'mongodb://localhost/lib2_db';

function init() {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', () => {
        console.log('Error in connecting with the db');
    });

    db.on('open', () => {
        console.log('Db connect sucessful');
    });
}

module.exports = {
    init,
};