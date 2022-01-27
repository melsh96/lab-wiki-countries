import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../App.css';

const CountriesList = ({ countries }) => {
  //   console.log(countries);
  return (
    <div>
      <Outlet />
      <ul className="lists">
        {countries.map((country) => {
          return (
            <li className="list" key={country.name.common}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <Link to={country.alpha3Code}>{country.name.common}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
