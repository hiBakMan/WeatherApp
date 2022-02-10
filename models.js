const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    query: {type: String, required: true},
    date: {type: String, default: new Date()} //String type is chosen because otherwise all dates are converted to UTC by MangoDB 
});

const queryModel = mongoose.model('queryModel', querySchema);

const weatherSchema = new mongoose.Schema({
    date: {type: String, required: true}, //String type is chosen because otherwise all dates are converted to UTC by MangoDB 
    location: {type: String, required: true},
    temperature: {type: Number, required: true},
    windspeed: {type: Number, required: true},
    description: {type: String, required: true}
});

const weatherModel = mongoose.model('weatherModel', weatherSchema);

module.exports = {queryModel, weatherModel};