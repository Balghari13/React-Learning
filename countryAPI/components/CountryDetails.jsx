import React, { useContext, useEffect, useState } from 'react'
import './countryDetails.css'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import { useTheme } from '../hooks/useTheme'


export default function CountryDetails() { 
//  const countryName = new URLSearchParams(location.search).get('name')
 const params = useParams()
  const countryName = params.country
  const[countryData, setCountryData] = useState(null)
  const[notFound, setNotFound] = useState(false)
  //const[isDark] = useOutletContext()
  //console.log(countryName);
  // const[isDark] = useContext(ThemeContext)
  const[isDark] = useTheme()

  
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
         currency: Object.values(data.currencies).map((currency)=>currency.name).join(', '),
         borders: []
        })
        // data.borders.map((border)=>{
        //   fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                
        //   .then((res)=>res.json())
        //   .then(([borderCountry])=> {
        //       setCountryData((prevState)=> ({...prevState, borders: [...prevState.borders, borderCountry.name.common]}))
        //   })
        // })
        if(!data.borders){
          data.borders = []
        }
        Promise.all(data.borders.map((border)=>{
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res)=>res.json())
          .then(([borderCountry])=> borderCountry.name.common)
        })).then((borders)=>{
          setCountryData((prevState)=> ({...prevState,borders}))
        })
      }
    ).catch((err)=>{
      setNotFound(true)
      
    })
  },[countryName])
  if(notFound){
    return <div>Country not found</div>
  }
  return countryData===null ? ('loading...') 
  : (
    
       <main className={`${isDark?'dark':''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={()=>history.back()}>
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
              {
              countryData.borders.map((border,key)=> <Link key={border} to={`/${border}`}>{border}</Link>)
            }
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}
