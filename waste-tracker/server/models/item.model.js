const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({

    itemName: {
        type: String,
        required: [true, "Name is required"]
    },

    itemWeight: {
        type: String,
    },

    itemCost: {
        type: Number,
        required: [true, "Cost is required"]
    }

}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;