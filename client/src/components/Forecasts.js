import Forecast from "./Forecast";

const Forecasts = ({forecasts}) => {
    forecasts = forecasts.slice(1, forecasts.length + 1);
    
    return (
        <div className="forecasts-box" data-testid="forecasts-box">
        {forecasts.map((forecast) => {
        return (
        <Forecast 
        key={forecast.date} 
        forecast={forecast} 
        />
        )
        })}
        </div>

    )   
};

export default Forecasts;