const Item = require('../models/item.model');
const { response } = require("express");

module.exports.index = (req, res) => {
    response.json({ message: "Hello World" });
}

module.exports.createItem = (req, res) => {
    const { name, weight, cost } = req.body;
    Item.create({
        name,
        weight, 
        cost
    })
    .then(item=> res.json(item))
    .catch(err=> res.json(err));
}