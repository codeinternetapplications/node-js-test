'use strict';
require('./config');

// Init
const express = require('express');
const app = express();

// setup routes
app.use(require('./routes'));

// index
app.get('/', function (req, res) { 
  res
    .status(200)
    .send('&lt;/CODE&gt; is running')
    .end();
});

// catch all for 404
app.all('*', (req, res) => {
  res
    .status(404)
    .send('404 - Not found')
    .end();
});

// start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});