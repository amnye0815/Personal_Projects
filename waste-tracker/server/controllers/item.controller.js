const Item = require('../models/item.model');


module.exports = {

    createItem: (req, res) => {
        Item.create(req.body)
        .then((newItem)=>{
            console.log(newItem);
            res.json(newItem);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

}