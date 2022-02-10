const Location = ({location, getWeather, setCurrentWeather, setForecasts, getForecasts, postWeather, setLocation}) => {
    return (
        <button key={location.id} data-testid="location-btn" className="location-btn" onClick={() => {getWeather(location, setCurrentWeather, postWeather, setLocation); getForecasts(location, setForecasts)}}> 
        {location.name}, {location.country}
        </button>
    )   
};

export default Location;