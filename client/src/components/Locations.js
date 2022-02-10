import Location from './Location'

const Locations = ({locations, getWeather, setCurrentWeather, setForecasts, getForecasts, postWeather, setLocation}) => {
    if (locations.length > 5) {
        locations = locations.slice(0, 5)
    };
    return (
        <div className="locations-box" data-testid="locations-box">
            {locations.map((location) => {
            return (
                <Location 
                key={location.id} 
                location={location} 
                getWeather={getWeather} 
                setCurrentWeather={setCurrentWeather}
                setForecasts={setForecasts}
                getForecasts={getForecasts}
                postWeather={postWeather}
                setLocation={setLocation}
                />
            )
            })}
        </div>
    )
};

export default Locations;