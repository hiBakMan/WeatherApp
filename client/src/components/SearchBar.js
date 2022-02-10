const SearchBar = ({query, setQuery, setLocations, getLocations, setCurrentWeather, setError, postQuery}) => {
    return (
          <input 
          className="search-bar" 
          data-testid="search-bar"
          type="text" 
          placeholder="Please enter a city name..." 
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={e => {getLocations(e, query, setLocations, setQuery, setCurrentWeather, setError); postQuery(e, query)}}
          />
)
};

export default SearchBar;