const BackButton = ({setCurrentWeather}) => {
    return (
       <button data-testid="back-btn" className="back-btn" onClick={() => setCurrentWeather('')}>
       Back to List of Locations    
       </button>
    )   
};

export default BackButton;