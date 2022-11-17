const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/waste_tracker_db", {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
})
    .then(() => console.log("Established connection to db."))
    .catch(err=> console.log("Something went wrong with the db.", err));

