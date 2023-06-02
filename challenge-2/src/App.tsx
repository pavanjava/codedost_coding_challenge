import React, { useState } from 'react';
import './App.css';
import { type } from 'os';

type country_type = {
  name: string;
  value: string;
  cities: string[];
}

type countries_type = country_type[] | any[];

const App = () => {

  const countries: countries_type = [
    {
      name: 'India',
      value: 'IN',
      cities: [
        'Hyderabad',
        'Bangalore'
      ]
    },
    {
      name: 'Pakisthan',
      value: 'PAK',
      cities: [
        'Hyderabad',
        'Lahore'
      ]
    },
    {
      name: 'Bangladesh',
      value: 'BG',
      cities: [
        'Dhaka',
        'Chittagong'
      ]
    }
  ]

  let [cities, setCities] = useState([]);

  const handleCountryChange = (country: string) => {

    const selectedObject = countries.findIndex((obj: country_type) => obj.name.toLowerCase() === country.toLowerCase())
    setCities(countries[selectedObject].cities);
  }

  const handleCitiesChange = (city: string) => {
    console.log(`selected city: ${city}`);
  }

  const renderCountriesList = () => {
    return (
      <select onChange={(e) => handleCountryChange(e.target.value)}>
        {
          countries.map((obj: country_type) => (
            <option key={obj.value} value={obj.name}>{obj.name}</option>
          ))
        }
      </select>
    );
  }

  const renderCitiesList = () => {
    return (
      <select onChange={(e) => handleCitiesChange(e.target.value)}>
        {
          cities.map((item: string, index: number) => (
            <option key={index} value={item}>{item}</option>
          ))
        }
      </select>
    );
  }

  return (
    <div className="App">
      {
        renderCountriesList()
      }
      {
        renderCitiesList()
      }
    </div>
  );
}

export default App;
