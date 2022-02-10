import { capitalize, formatDateTime, weekdayDateTime } from '../auxiliary/helperfunctions'

const Forecast = ({forecast}) => {

    return (
        <div key={forecast.date} data-testid="forecast-box" className="forecast-box">
            <div className="date">{formatDateTime(forecast.date)}</div>
            <div className="weekday">{weekdayDateTime(forecast.date)}</div>
            <div className="description">{capitalize(forecast.symbolPhrase)}</div>
            <div className="temperature">Temperature: {forecast.minTemp}...{forecast.maxTemp} °C</div>
            <div className="feels">Feels Like: {forecast.minFeelsLikeTemp}...{forecast.maxFeelsLikeTemp} °C</div>
            <div className="windspeed">Max Wind Speed: {forecast.maxWindSpeed} m/s</div>
            <img src={process.env.PUBLIC_URL + `/assets/${forecast.symbol}.png`} alt="weather symbol"/>
        </div>
    )   
};

export default Forecast;