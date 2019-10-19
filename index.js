const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');

const test = require('./routes/test');
const swaggerDocument = require('./swagger.json');
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/test', test);

app.listen(3000);