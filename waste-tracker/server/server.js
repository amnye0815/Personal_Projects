const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.listen(port, () => console.log('Listening on port: ${port}'));
app.use(cors());