// Express initialization
const express = require("express");
const app = express();
// Routes lecture
const routes = require("./config/routes");

// Use of routes
routes(app);

// Port declaration
app.set('port', process.env.PORT || 3000);

// Server Port
app.listen(app.get('port'), function() {
    console.log('Server');
});
