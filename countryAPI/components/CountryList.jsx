import React, { useEffect, useState } from "react";
// import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import ShimmerEfftect from "./ShimmerEfftect";



export default function CountryList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
    )
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
//     const intervalId = setInterval(() => {
//       console.log("running countrylist component ");
//     }, [1000])
//     return()=>{
// clearInterval(intervalId)
//     }
  }, []);

  if(!countriesData.length){
  return <ShimmerEfftect/>
  }

  return (
    <>
 
      { <div className="countries-container">
        
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query),
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })} 
      </div>}
    </>
  );
}
