import React, { useContext} from 'react'
import './countriesSection.css'
import { MyContext } from '../../MyContext'
import { filteredCountryList } from '../../utils'

const CardCountry = ({countryName, flag, handleClickCard,id }) => {
 
    return (
      <div className='cardCountry' onClick={() => handleClickCard(id)}>
        <div className={countryName === "Nepal" ? "nepal--style flag--container" : "flag--container"}>
            <img src={flag} alt='flag'/>
        </div> 
        <h3>{countryName}</h3>
      </div>
    )
}

const ListCountries = ({handleClickCard,filteredCountry, chosenContinent}) => {
  const countries = useContext(MyContext)
  const filteredCountries = filteredCountryList(countries, filteredCountry, chosenContinent)

  // Return countries based on search country input
  return (
    <>
      {filteredCountries.map((country, i) => {
        return (
          <CardCountry key={i} countryName={country.name.common} flag={country.flags.png} handleClickCard={handleClickCard} id={countries.countriesData.indexOf(country)}/>
        )
      })}
    </>
  )
}


const CountriesSection = ({handleClickCard,filteredCountry, chosenContinent}) => {

  return (
    <section className='countries--section'>
        {/* <h2>Click on the Card Country for more info</h2> */}
        <div className='countries--list'>
            <ListCountries handleClickCard={handleClickCard} filteredCountry={filteredCountry} chosenContinent={chosenContinent}/>
        </div>
    </section>
    
  )
}

export default CountriesSection