const express = require("express");
const Middleware = require("../middleware/middleware");
const AuthenticationMiddleware = require("./middleware/auth");
const ErrorHandlingMiddleware = require("../middleware/errorHandling");

const PORT = process.env.PORT;

const app = express();

const PlansController = require("./controllers/plansController");

Middleware(app);
AuthenticationMiddleware(app);
app.use("", PlansController);
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
    console.log(`Plans service listening on port ${PORT}`);
});
