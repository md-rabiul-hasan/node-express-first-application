const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.json());

const route = require('./route');
route(app);

app.use("/public", express.static("public"));

app.get('/pub', (request, response) => {
    response.sendFile(path.resolve(__dirname, "./public/style.css"));
});



app.listen(3000);