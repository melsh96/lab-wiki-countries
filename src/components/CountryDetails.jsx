import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  console.log(countries);
  const params = useParams();

  const country = countries.find(
    (pays) => pays.alpha3Code === params.alpha3Code
  );
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>

      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <div>
        <p>Capital : {country.capital}</p>
      </div>
      <div>
        <p>Area : {country.area} km2</p>
      </div>
      <div>
        <p>Borders : {country.borders}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
