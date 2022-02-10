import SearchBar from './SearchBar'
import SearchButton from './SearchButton'

const SearchBox = ({query, setQuery, setLocations, getLocations, setCurrentWeather, setError, postQuery}) => {
    return (
        <div className="search-box" data-testid="search-box">
          <SearchBar 
          query={query}
          setQuery={setQuery}
          setLocations={setLocations}
          getLocations={getLocations}
          setCurrentWeather={setCurrentWeather}
          setError={setError}
          postQuery={postQuery}
          />
          <SearchButton 
          query={query}
          setQuery={setQuery}
          setLocations={setLocations}
          getLocations={getLocations}
          setCurrentWeather={setCurrentWeather}
          setError={setError}
          postQuery={postQuery}
          />
        </div>
)
};

export default SearchBox;