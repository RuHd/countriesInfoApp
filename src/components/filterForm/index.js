import './filterSection.css'


const FilterSections = ({setFilteredCountry, handleFilterContinent}) => {

  return (
    <section className='filter--section'>
        <form>
            <div>
                <label>
                    <input type="text" placeholder='Search for a Country'  onChange={(e) => setFilteredCountry(e.target.value)} />
                </label> 
            </div>          
            <div className='filters--option'>
                <div>
                    <label>
                        <span>Continent</span>
                        <select defaultValue="Any" name='continents' onChange={(e) => handleFilterContinent(e.target.value)}>
                            <option value="Any">Any</option>
                            <option value="Asia">Asia</option>
                            <option value="Americas">Americas</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                            <option value="Antarctic">Antarctic</option>
                            <option value="Africa">Africa</option>
                        </select>
                    </label>

                </div>
            </div>
        </form>
    </section>
  )
}

export default FilterSections