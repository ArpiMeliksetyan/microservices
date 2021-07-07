const express = require('express');
const dotenv = require('dotenv');
const Middleware = require('./middleware/middleware');
const ErrorHandlingMiddleware = require('./middleware/errorHandling')

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

const PlansController = require('./controller/plansController');
const SubscriptionController = require('./controller/subscriptionController');

Middleware(app);
app.use('/api/plans',PlansController);
app.use('/api/subscription',SubscriptionController);

//Error middleware must be defined after all other middleware/routes
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});
