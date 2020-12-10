'use strict';

const express = require('express');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const routesCats = require('./routes/cats')
const routesDogs = require('./routes/dogs')

const app = express();

app.use(express.json());

app.use(logger);
app.use(routesCats);
app.use(routesDogs);

// Route
app.get('/', homeRouteHandler);

function homeRouteHandler(req, res) {
  res.status(200).send('Hello World!');
}



app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
