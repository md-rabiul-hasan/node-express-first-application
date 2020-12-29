const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const { request, response } = require("express");

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.end("Hello Arif");
});

app.post('/post', (request, response) => {
    let newResponse = {
        "time" : Date.now(),
        "response_code" : 200,
        "message" : `Hello ${request.body.name}, How are you ?`
    }
    response.json(newResponse);
} );

app.listen(3000);