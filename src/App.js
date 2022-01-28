import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';

function App() {
  const [countires, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          {countires.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div>
              <div>
                <CountriesList countries={countries} />
              </div>
              <div>
                <Routes>
                  <Route
                    path="/:alpha3Code"
                    element={<CountryDetails countries={countries} />}
                  />
                </Routes>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
