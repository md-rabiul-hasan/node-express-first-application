const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.end("Hello Arif");
});

app.listen(3000);