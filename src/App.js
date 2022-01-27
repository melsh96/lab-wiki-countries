import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countries from './countries.json';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
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
      </div>
    </div>
  );
}

export default App;
