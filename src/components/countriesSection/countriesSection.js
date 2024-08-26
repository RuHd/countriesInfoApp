import React, { useContext} from 'react'
import './countriesSection.css'
import { MyContext } from '../../MyContext'

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

  // Return countries based on search country input
  if (filteredCountry.length >= 1) {
    return (
      countries.countriesData.map((country,id) => {
        if (chosenContinent !== "Any") {
          if (country.name.common.toLowerCase().includes(filteredCountry.toLowerCase()) && country.continents[0] === chosenContinent) {
            return (
              <CardCountry
                key={id}
                countryName={country.name.common}
                flag = {country.flags.png}
                id={id}
                handleClickCard={handleClickCard}
              />
            )
          } 
        } else if (country.name.common.toLowerCase().includes(filteredCountry.toLowerCase()) )
        return (
          <CardCountry
            key={id}
            countryName={country.name.common}
            flag = {country.flags.png}
            id={id}
            handleClickCard={handleClickCard}
          />
        )

        return ''
      })
    )
    // Return Countries List based on Continent
  } else if (chosenContinent !== "Any") {
    return(
      countries.countriesData.map((country,id) => {
        if (country.continents[0] === chosenContinent) {
          return (
            <CardCountry
              key={id}
              countryName={country.name.common}
              flag = {country.flags.png}
              id={id}
              handleClickCard={handleClickCard}
            />
          )
        }
        return ""
      })
    )
  }  return (
      countries.countriesData.map((country,id) => {
        return (
          <CardCountry
            key={id}
            countryName={country.name.common}
            flag = {country.flags.png}
            id={id}
            handleClickCard={handleClickCard}
          />
        )
      })
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