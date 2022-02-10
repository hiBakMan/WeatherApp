import { validateQuery } from "./helperfunctions";
import axios from "axios";

// GET Location Function

const getLocations = (e, query, setLocation, setQuerry, setCurrentWeather, setError) => {
if(e.key === "Enter" || e.type === "click") {
    axios.request({
        "method": "GET",
		"url": `https://foreca-weather.p.rapidapi.com/location/search/${query}`,
        "headers": {
		"x-rapidapi-host": "foreca-weather.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_KEY
            }
        })
	.then(response => {
		if (!validateQuery(query)) {
		setError('content')
		setLocation();
		} else if (response.data.locations.length === 0) {
		setError(query);
		setLocation();
		} else {
		setError()
		setLocation(response.data.locations);
		};
		setQuerry('');
		setCurrentWeather('');
    })
    .catch(err => {
        console.error(err);
});
};
};

// GET Current Weather Function

const getWeather = (location, setCurrentWeather, postWeather, setLocation) => {

axios.request({
	"method": "GET",
	"url": `https://foreca-weather.p.rapidapi.com/current/${location.id}?tempunit=C&windunit=MS&lang=en`,
	"headers": {
		"x-rapidapi-host": "foreca-weather.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_KEY
	}
})
.then(response => {
	setCurrentWeather(response.data.current);
	postWeather(location, response.data.current);
	setLocation(`${location.name}, ${location.country}`)	
})
.catch(err => {
	console.error(err);
});

};

// GET Weather Forecast Function

const getForecasts = (location, setForecasts) => {

axios.request({
	"method": "GET",
	"url": `https://foreca-weather.p.rapidapi.com/forecast/daily/${location.id}?tempunit=C&windunit=MS&periods=8&dataset=full`,
	"headers": {
		"x-rapidapi-host": "foreca-weather.p.rapidapi.com",
		"x-rapidapi-key": process.env.REACT_APP_KEY
	}
})
.then(response => {
	setForecasts(response.data.forecast);
})
.catch(err => {
	console.error(err);
});
};

export {getLocations, getWeather, getForecasts};