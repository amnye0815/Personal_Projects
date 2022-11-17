const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: {type, String},
    weight: {type, String},
    cost: {type, Number},
}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema);