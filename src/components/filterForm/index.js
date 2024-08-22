import React, { useState } from 'react'
import './filterSection.css'


const FilterSections = ({setFilteredCountry, handleFilterContinent, handleChosenLanguage}) => {
    
  return (
    <section className='filter--section'>
        <form>
            <div>
                <label>
                    <input type="text" placeholder='Search for a Country'  onChange={(e) => setFilteredCountry(e.target.value)} />
                </label> 
            </div>          
            <div className='filters--option'>
                <h2>Filter By: </h2>
                <div>
                    <label>
                        <span>Continent</span>
                        <select defaultValue="Any" name='continents' onChange={(e) => handleFilterContinent(e.target.value)}>
                            <option value="Any">Any</option>
                            <option value="Asia">Asia</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Africa">Africa</option>
                        </select>
                    </label>

                    <label>
                        <span>Language</span>
                        <input type="text" placeholder='Search By Language' name='language' onChange={(e) => handleChosenLanguage(e.target.value)}/>
                    </label>

                </div>
            </div>
        </form>
    </section>
  )
}

export default FilterSections