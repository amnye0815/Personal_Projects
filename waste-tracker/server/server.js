const express = require('express');
// const cors = require('cors');
const app = express();
require('./routes/food.routes')(app);

app.listen(8000, () => console.log('Listening on port 8000'));
// app.use(cors());