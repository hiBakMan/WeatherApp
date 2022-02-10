const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/apiroutes')

const app = express();
app.use(bodyParser.json());
require('dotenv').config();

// Mongo DB SetUp

mongoose
    .connect(process.env.mongoURI)
    .then(() => console.log('Connected to Mongo DB'))
    .catch(error => console.log(error));

// Route SetUp

app.use('/api/', routes);

// Server SetUp

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));