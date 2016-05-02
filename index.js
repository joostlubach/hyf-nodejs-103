var express = require('express');
var bodyParser = require('body-parser');
var actions = require('./actions'); // Tip: see `actions/index.js`.

// Create a new application.
var app = express();

// Use the body parser middleware, which will parse the request body and set the
// resulting JSON object in `request.body`.
app.use(bodyParser.json());

// See that file for what this means.
app.use(require('./middleware/response-error'));

// Actions
app.get('/todo', actions.list);
app.post('/todo', actions.create);

// Start the server.
app.listen(3000);