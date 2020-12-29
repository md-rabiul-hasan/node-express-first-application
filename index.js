const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.json());

const route = require('./route');
const { request, response } = require("express");
route(app);

app.use("/public", express.static("public"));

app.get('/pub', (request, response) => {
    response.sendFile(path.resolve(__dirname, "./public/style.css"));
});

const fixed_token = "hasan123";
app.use("/api", (request, response, next) => {
    let token = request.header('token');
    if(!token){
        let res = {
            "message" : "unauthorized user"
        }
        return response.json(res).status(401);
    }else{
        if(fixed_token === token){
            return next();
        }else{
            let res = {
                "message" : "invalid token"
            }
            return response.json(res).status(401);
        }
    }
});


app.get('/api/token', (request, response) => {
    var response_data = {
        "message" : `Hello ${request.body.name} ! How is life`
    }
    response.json(response_data);
});

app.listen(3000);