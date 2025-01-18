const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json({limit: "1mb"}));
app.use(cors());
app.use('/public', express.static('static'));
const fs = require('fs');

const routes = require('./routes/routes');
app.use(routes);

app.listen(3000);   