const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    pages: {
        type: Number,
        required: true
    }
});

module.exports = new model('Book', schema);