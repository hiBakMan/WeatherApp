import { capitalize, formatDateTime, weekdayDateTime, getTime } from '../auxiliary/helperfunctions'

const CurrentWeather = ({currentWeather, location}) => {
    return (
        <div data-testid="curwea-box" className="curwea-box">
            <div className="location">{location}</div>
            <div className="date">{formatDateTime(currentWeather.time)}</div>
            <div className="weekday">{weekdayDateTime(currentWeather.time)}</div>
            <div className="time">{getTime(currentWeather.time)}</div>
            <div className="description">{capitalize(currentWeather.symbolPhrase)}</div>
            <div className="temperature">Temperature: {currentWeather.temperature} °C</div>
            <div className="feels">Feels Like: {currentWeather.feelsLikeTemp} °C</div>
            <div className="winddir">Wind Direction: {currentWeather.windDirString}</div>
            <div className="windspeed">Wind Speed: {currentWeather.windSpeed} m/s</div>
            <img src={process.env.PUBLIC_URL + `/assets/${currentWeather.symbol}.png`} alt="weather symbol"></img>
        </div>
    )   
};


export default CurrentWeather;

