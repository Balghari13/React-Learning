import React from 'react'

export default function CountryCard({name,flag,population,region,capital}) {
console.log(flag);

   return(
    <a className="country-card" href={`/country.html?name=${CountryCard.name}`}>
     <img src={flag} alt={name + ' Flag'} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString('en-IN')}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
      </a>
   )
}
