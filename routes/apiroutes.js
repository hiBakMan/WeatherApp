const express = require('express');
const router = express.Router();
const Query = require('../models').queryModel;
const Weather = require('../models').weatherModel;

// GET Request to See All Saved Queries in the Database

router.get('/queries/', (req, res) => {
    Query.find()
        .sort({ date: -1 })
        .then(query => res.json(query));
});

// GET Request to See All Saved Weather Stamps in the Database

router.get('/weather/', (req, res) => {
    Weather.find()
        .sort({ date: -1 })
        .then(weather => res.json(weather));
});

// POST Request to Post a Query

router.post('/queries/', (req, res) => {
    console.log(req.body.query);

    const newQuery = new Query({
        query: req.body.query,
        date: new Date()
    });

    newQuery.save()
        .then(data => res.json(data));

});

// POST Request to Post a Weather Stamp

router.post('/weather/', (req, res) => {
    
    const {
        date,
        location,
        temperature,
        windspeed,
        description
    } = req.body;

    console.log(req.body);

    const newWeather = new Weather({
        date: date,
        location: location,
        temperature: temperature,
        windspeed: windspeed,
        description: description
    });

    newWeather.save()
        .then(data => res.json(data));

});

module.exports = router;