const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config');
require('./routes/item.routes')(app);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(8000, () => console.log('Listening on port 8000'));
app.use(cors());