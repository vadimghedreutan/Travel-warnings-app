import React, { useState } from 'react'
import useStats from '../utils/useStats'
import CardsItem from './cardsItem';

const countries_custom = {
    "countries": {
      "France": "FR",
      "Spain": "ES",
      "US": "US",
      "China": "CN",
      "Italy": "IT",
      "Turkey": "TR",
      "Mexico": "MX",
      "Germany": "DE",
      "Thailand": "TH",
      "United Kingdom": "GB",
      "Japan": "JP",
      "Austria": "AT",
      "Greece": "GR",
      "Malaysia": "MY",
      "Russia": "RU",
      "Portugal": "PT",
      "Canada": "CA",
      "Poland": "PL",
      "Netherlands": "NL",
    }
  }

function CountrySelector() {
  const {stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
  
  const [selectedCountry, setSelectedCountry] = useState('PRT');
  if(loading) return <div className="loader loading">
      <span className="sr-only">Loading...</span>
    </div>
  if(error) return <div className="error">
      <span>Something is off...</span>
    </div>

  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <select className="cards__form-control"
        onChange={e => { 
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries_custom.countries).map((
          [country, code]) => (
            <option
              selected={selectedCountry === countries[code] } 
              key={code} 
              value={countries[code]}
            >
              {country}
            </option>
        ))}
      </select>
      <CardsItem url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    </div>
  );
}

export default CountrySelector;