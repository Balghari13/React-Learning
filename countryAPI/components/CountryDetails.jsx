import React, { useEffect, useState } from 'react'
import './countryDetails.css'


export default function CountryDetails() { 
  const countryName = new URLSearchParams(location.search).get('name')
  const[countryData, setCountryData] = useState(null)
  //console.log(countryName);

  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res)=>res.json())
    .then(([data])=>
      {console.log(data)
        setCountryData({
          name: data.name.common,
          nativeName : Object.values(data.name.nativeName)[0].common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital[0],
          flag: data.flags.svg,
          tld: data.tld,
         language: Object.values(data.languages).join(', '),
         currency: Object.values(data.currencies).map((currency)=>currency.name).join(', ')
        })
      }
    )
  },[])
  
  return countryData===null ? ('loading...') 
  : (
    
       <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currency}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.language}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}
