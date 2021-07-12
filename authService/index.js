const express = require('express');
const ErrorHandlingMiddleware = require('../middleware/errorHandling');

const PORT = process.env.PORT || 7007;

const app = express();
const Middleware = require('../middleware/middleware');

const UserController = require('./controllers/userController');

Middleware(app);

app.use('',UserController);
ErrorHandlingMiddleware(app);

app.listen(PORT,()=>{
    console.log(`Auth Service listening on port ${PORT}`);
})
