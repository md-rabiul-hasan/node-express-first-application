module.exports = function(app){
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
    
    
}