const express = require("express");
const AuthenticationMiddleware = require("./middleware/auth")
const Middleware = require("../middleware/middleware");
const ErrorHandlingMiddleware = require("../middleware/errorHandling");

const PORT = process.env.PORT;

const app = express();

const SubscriptionsController = require("./controllers/subscriptionsController");

Middleware(app);
AuthenticationMiddleware(app);
app.use("", SubscriptionsController);
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Subscriptions service listening on port ${PORT}`);
});
