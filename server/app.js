const express = require('express');
const path = require('path');

const app = express();

// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

const routes = require('./routes');

app.use('/', routes);

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port);