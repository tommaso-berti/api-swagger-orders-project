const express = require('express'),
      server = express(),
	fs = require('fs'),
      orderData = require('./orders.json');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
server.set('port', process.env.PORT || 3000);

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Orders API",
            version: "1.0.0",
            description: "API for orders management"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./server.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger endpoint
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.get('/',(request,response)=>{
 response.send('Welcome to our simple online order managing web app!');
});


//Add the /orders code here!


//Add the /neworder code here!


//Add the /update/:id code here!


//Add the /delete/:id code here!


server.listen(3000,()=>{
 console.log('Express server started at port 3000');
});