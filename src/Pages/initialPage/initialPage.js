import React, { useState } from 'react'
import './initialPage.css'
import worldLogo from '../../worldLogo.png'
import FilterSections from '../../components/filterForm'
import CountriesSection from '../../components/countriesSection/countriesSection'
import CountryPage from '../CountryPage/CountryPage'

const HomePage = () => {

  const [countrySelected, setCountrySelected] = useState(false)
  const [selectedCountryID, setSelectedCountryID] = useState(0)
  const [filteredCountry, setFilteredCountry] = useState("")
  const [chosenContinent, setChosenContinent] = useState("Any")

  // Open/close Country page
  const handleClickCard = (id) => {
    setSelectedCountryID(id)
    setCountrySelected(!countrySelected)
  }


  // Get Continent from Drop Menu filter
  const handleFilterContinent = (continent) => {
      setChosenContinent(continent)
      console.log(chosenContinent)
  }



  return (
    
    <main className={countrySelected ? "disableClick" : ""}>
      {countrySelected && <CountryPage id = {selectedCountryID} handleClickCard = {handleClickCard}/>}
      <section className='heroPage'>
        <div className='home--title'>
          <img src={worldLogo}/>
          <h1>World Info</h1>
          <h2>Made By Ruan Mesquita</h2>
        </div> 
      </section>
      <FilterSections filteredCountry = {filteredCountry} setFilteredCountry = {setFilteredCountry} handleFilterContinent = {handleFilterContinent} />
      <CountriesSection handleClickCard = {handleClickCard} filteredCountry = {filteredCountry} chosenContinent = {chosenContinent}/>
    </main>
  )
}

export default HomePage