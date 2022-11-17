const ItemController = require('../controllers/item.controller.js');

module.exports = function(app) {
    app.get('/api', ItemController.index);
}