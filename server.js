const express = require('express');
const app = express();

const examples = require('./examples');
examples(app);

const tuitsController = require('/controllers/tuits-controller');
tuitsController(app);

app.listen(3000);
