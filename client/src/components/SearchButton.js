const SearchButton = ({query, setQuery, setLocations, getLocations, setCurrentWeather, setError, postQuery}) => {
    return (
          <button className="search-btn"  data-testid="search-btn" onClick={e => {getLocations(e, query, setLocations, setQuery, setCurrentWeather, setError); postQuery(e, query)}}>
            Search
          </button>
)
};

export default SearchButton;