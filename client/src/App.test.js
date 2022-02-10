import React from 'react';
import ReactDOM from 'react-dom'
import { render, cleanup, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import renderer from "react-test-renderer"

import BackButton from "./components/BackButton";
import CurrentWeather from "./components/CurrentWeather";
import ErrorBox from './components/ErrorBox';
import Forecast from './components/Forecast'
import Forecasts from "./components/Forecasts";
import Location from './components/Location'
import Locations from "./components/Locations";
import SearchBar from "./components/SearchBar";
import SearchBox from "./components/SearchBox";
import SearchButton from "./components/SearchButton";



// Back Button Testing


describe('Back Button', () => {

afterEach(cleanup);

test('is rendered without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BackButton></BackButton>, div);
})

test('is rendered correctly', () => {
    const { getByTestId } = render(<BackButton></BackButton>);
    expect(getByTestId('back-btn')).toHaveTextContent("Back to List of Locations");
})

test('matches snapshot', () => {
    const tree = renderer.create(<BackButton>Back to List of Locations</BackButton>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('has OnClick triggering a function', () => {
    const testFun = jest.fn();
    const { getByTestId } = render(<BackButton setCurrentWeather={testFun}></BackButton>);
    fireEvent.click(getByTestId('back-btn'));
    expect(testFun).toHaveBeenCalled();
})

});


// Current Weather Box testing

describe('Current Weather Box', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {
        const testLoc = "Test City, Test Country"
        const testWeather = {
            time: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            temperature: "1",
            feelsLikeTemp: "-3",
            windDirString: "NW",
            windSpeed: "5",
            symbol: "d300"
        }


        const div = document.createElement("div");
        ReactDOM.render(<CurrentWeather currentWeather={testWeather} location={testLoc} ></CurrentWeather>, div);
    })
    
    test('is rendered correctly', () => {
        const testLoc = "Test City, Test Country"
        const testWeather = {
            time: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            temperature: "1",
            feelsLikeTemp: "-3",
            windDirString: "NW",
            windSpeed: "5",
            symbol: "d300"
        }
        const { getByTestId } = render(<CurrentWeather currentWeather={testWeather} location={testLoc}></CurrentWeather>);
        expect(getByTestId('curwea-box')).toHaveTextContent("Test City, Test Country8 February 2022Tuesday12:00:00 PMCLOUDYTemperature: 1 °CFeels Like: -3 °CWind Direction: NWWind Speed: 5 m/s");
    })
    
    test('matches snapshot', () => {
        const testLoc = "Test City, Test Country"
        const testWeather = {
            time: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            temperature: "1",
            feelsLikeTemp: "-3",
            windDirString: "NW",
            windSpeed: "5",
            symbol: "d300"
        }
        const tree = renderer.create(<CurrentWeather currentWeather={testWeather} location={testLoc}></CurrentWeather>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    });

// Error Box Testing


describe('Error Box', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {

        const error = ""

        const div = document.createElement("div");
        ReactDOM.render(<ErrorBox error={error}></ErrorBox>, div);
    })
    
    test('is rendered correctly when content error exists', () => {
        const error = "content"

        const { getByTestId } = render(<ErrorBox error={error}></ErrorBox>);
        expect(getByTestId('error-box')).toHaveTextContent("Allowed queries: characters and spaces up to 30 symbols in total");
    })
    
    test('is rendered correctly when other error exists', () => {
        
        const error = "test"

        const { getByTestId } = render(<ErrorBox error={error}></ErrorBox>);
        expect(getByTestId('error-box')).toHaveTextContent("No results found for 'test'");
    })

    test('matches snapshot', () => {

        const error = "";

        const tree = renderer.create(<ErrorBox error={error}></ErrorBox>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    });
  
// Forecast Box testing

describe('Forecast Box', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {

        const testFor = {
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }


        const div = document.createElement("div");
        ReactDOM.render(<Forecast forecast={testFor} ></Forecast>, div);
    })
    
    test('is rendered correctly', () => {
       
        const testFor = {
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }
        const { getByTestId } = render(<Forecast forecast={testFor}></Forecast>);
        expect(getByTestId('forecast-box')).toHaveTextContent("8 February 2022TuesdayCLOUDYTemperature: -1...1 °CFeels Like: 3... °CMax Wind Speed: 5 m/s");
    })
    
    test('matches snapshot', () => {

        const testFor = {
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }
        const tree = renderer.create(<Forecast forecast={testFor}></Forecast>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    });

// Forecasts Box testing

describe('Forecasts Box', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {

        const testFor = [{
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }];


        const div = document.createElement("div");
        ReactDOM.render(<Forecasts forecasts={testFor} ></Forecasts>, div);
    })
    
    test('is rendered correctly with 3 forecasts', () => {
       
        const testFor = [{
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        },
        {
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        },
        {
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }];

        const { getByTestId } = render(<Forecasts forecasts={testFor}></Forecasts>);
        expect(getByTestId('forecasts-box')).toHaveTextContent("8 February 2022TuesdayCLOUDYTemperature: -1...1 °CFeels Like: 3... °CMax Wind Speed: 5 m/s8 February 2022TuesdayCLOUDYTemperature: -1...1 °CFeels Like: 3... °CMax Wind Speed: 5 m/s");
    })
    
    test('matches snapshot', () => {

        const testFor = [{
            date: "Tue Feb 08 2022 12:00:00 GMT+0200 (Eastern European Standard Time)",
            symbolPhrase: "Cloudy",
            minTemp: "-1",
            maxTemp: "1",
            minFeelsLikeTemp: "-3",
            minFeelsLikeTemp: "3",
            maxWindSpeed: "5",
            symbol: "d300"
        }]
        const tree = renderer.create(<Forecasts forecasts={testFor}></Forecasts>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    });


// Location Button Testing


describe('Location Button', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {
        const testLoc = {
            name: "Test City",
            country: "Test Country"
        };


        const div = document.createElement("div");
        ReactDOM.render(<Location location={testLoc}></Location>, div);
    })
    
    test('is rendered correctly', () => {
        const testLoc = {
            name: "Test City",
            country: "Test Country"
        };

        const { getByTestId } = render(<Location location={testLoc}></Location>);
        expect(getByTestId('location-btn')).toHaveTextContent("Test City, Test Country");
    })
    
    test('matches snapshot', () => {
        const testLoc = {
            name: "Test City",
            country: "Test Country"
        };

        const tree = renderer.create(<Location location={testLoc}>Test City, Test Country</Location>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    test('has OnClick triggering the first function', () => {
        const testLoc = {
            name: "Test City",
            country: "Test Country"
        };

        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<Location location={testLoc} getWeather={testFunFirst} getForecasts={testFunSecond}></Location>);
        fireEvent.click(getByTestId('location-btn'));
        expect(testFunFirst).toHaveBeenCalled();
    })

    test('has OnClick triggering the second function', () => {
        const testLoc = {
            name: "Test City",
            country: "Test Country"
        };

        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<Location location={testLoc} getWeather={testFunFirst} getForecasts={testFunSecond}></Location>);
        fireEvent.click(getByTestId('location-btn'));
        expect(testFunSecond).toHaveBeenCalled();
    })
    
    });

// Locations Box testing

    describe('Locations Box', () => {

        afterEach(cleanup);
        
        test('is rendered without crashing', () => {
    
            const testLocs = [{
                id: "1",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "2",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "3",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "4",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "5",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "6",
                name: "Test City",
                country: "Test Country"
            }];
    
    
            const div = document.createElement("div");
            ReactDOM.render(<Locations locations={testLocs} ></Locations>, div);
        })
        
        test('is rendered correctly with 6 locations (should render a maximum of 5)', () => {
           
            const testLocs = [{
                id: "1",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "2",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "3",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "4",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "5",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "6",
                name: "Test City",
                country: "Test Country"
            }];
    
            const { getByTestId } = render(<Locations locations={testLocs}></Locations>);
            expect(getByTestId('locations-box')).toHaveTextContent("Test City, Test CountryTest City, Test CountryTest City, Test CountryTest City, Test CountryTest City, Test Country");
        })
        
        test('matches snapshot', () => {
    
            const testLocs = [{
                id: "1",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "2",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "3",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "4",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "5",
                name: "Test City",
                country: "Test Country"
            },
            {
                id: "6",
                name: "Test City",
                country: "Test Country"
            }];

            const tree = renderer.create(<Locations locations={testLocs}></Locations>).toJSON();
            expect(tree).toMatchSnapshot();
        })
        
        });

// Search Bar testing

describe('Search Bar', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {
    
        const div = document.createElement("div");
        ReactDOM.render(<SearchBar></SearchBar>, div);
    })
    
    test('is rendered correctly', () => {

        const value = "test";
       
    
        const { getByTestId } = render(<SearchBar value={value}></SearchBar>);
        expect(getByTestId('search-bar')).toHaveTextContent("");
    })
    
    test('matches snapshot', () => {

        const tree = renderer.create(<SearchBar></SearchBar>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('has OnKeyPress triggering the first function', () => {

        const value = "test";
    
        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<SearchBar value={value} getLocations={testFunFirst} postQuery={testFunSecond}></SearchBar>);
        fireEvent.keyPress(getByTestId('search-bar'), {key: "Enter", code: "Enter", charCode: 13});
        expect(testFunFirst).toHaveBeenCalled();
    })

    test('has OnKeyPress triggering the second function', () => {

        const value = "test";
    
        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<SearchBar value={value} getLocations={testFunFirst} postQuery={testFunSecond}></SearchBar>);
        fireEvent.keyPress(getByTestId('search-bar'), {key: "Enter", code: "Enter", charCode: 13});
        expect(testFunSecond).toHaveBeenCalled();
    })
    
    test('has OnChange triggering the function', () => {

        const value = "test";
    
        const testFunFirst = jest.fn();

        const { getByTestId } = render(<SearchBar value={value} setQuery={testFunFirst}></SearchBar>);
        fireEvent.change(getByTestId('search-bar'), {target: {value: "a"}});
        expect(testFunFirst).toHaveBeenCalled();
    })

    });

// Search Box testing

describe('Search Box', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {
    
        const div = document.createElement("div");
        ReactDOM.render(<SearchBox></SearchBox>, div);
    })
    
    test('is rendered correctly', () => {

        const value = "test";

       
        const { getByTestId } = render(<SearchBox query={value}></SearchBox>);
        expect(getByTestId('search-box')).toHaveTextContent("Search");
    })
    
    test('matches snapshot', () => {
        
        const testQuer = "test"

        const tree = renderer.create(<SearchBox query={testQuer}></SearchBox>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
    });

// Search Button testing

describe('Search Button', () => {

    afterEach(cleanup);
    
    test('is rendered without crashing', () => {
    
        const div = document.createElement("div");
        ReactDOM.render(<SearchButton></SearchButton>, div);
    })
    
    test('is rendered correctly', () => {
       
        const { getByTestId } = render(<SearchButton></SearchButton>);
        expect(getByTestId('search-btn')).toHaveTextContent("Search");
    })
    
    test('matches snapshot', () => {

        const tree = renderer.create(<SearchButton></SearchButton>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('has OnClick triggering the first function', () => {
    
        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<SearchButton getLocations={testFunFirst} postQuery={testFunSecond}></SearchButton>);
        fireEvent.click(getByTestId('search-btn'));
        expect(testFunFirst).toHaveBeenCalled();
    })

    test('has OnClick triggering the second function', () => {
    
        const testFunFirst = jest.fn();
        const testFunSecond = jest.fn();

        const { getByTestId } = render(<SearchButton getLocations={testFunFirst} postQuery={testFunSecond}></SearchButton>);
        fireEvent.click(getByTestId('search-btn'));
        expect(testFunSecond).toHaveBeenCalled();
    })
    
    });
