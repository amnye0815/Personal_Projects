const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/item.routes')(app);

app.listen(8000, () => console.log('Listening on port 8000'));
app.use(cors());