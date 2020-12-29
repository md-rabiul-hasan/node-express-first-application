const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const route = require('./route');
route(app);


app.listen(3000);