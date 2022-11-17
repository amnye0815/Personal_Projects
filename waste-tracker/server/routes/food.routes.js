const FoodController = require('../controllers/food.controller.js');

module.exports = function(app) {
    app.get('/api', FoodController.index);
}