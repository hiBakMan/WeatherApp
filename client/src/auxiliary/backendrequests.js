import axios from 'axios';

// POST to Queries Function

const postQuery = async (e, query) => {

    if(e.key === "Enter" || e.type === "click") {
    await axios.post('api/queries/', {
        query: query,
        date: Date.now
    }).then(response => console.log(response))
      .catch(error => console.log(error));
    }
}

// POST to Weather Function

const postWeather = async (location, currentWeather) => {
    await axios.post('api/weather/', {
        date: currentWeather.time,
        location: `${location.name}, ${location.country}`,
        temperature: currentWeather.temperature,
        windspeed: currentWeather.windSpeed,
        description: currentWeather.symbolPhrase
    }).then(response => console.log(response))
      .catch(error => console.log(error));
}

export {postQuery, postWeather};