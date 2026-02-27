import React, { useContext, useState } from 'react'
import './CountryPage.css'
import { MyContext } from '../../MyContext'
import { IoMdClose } from "react-icons/io";


const CountryPage = ({id, handleClickCard}) => {
    
    const countries = useContext(MyContext)
    const [countryInfo, setcountryInfo] = useState(countries.countriesData.find((country,i) => i === id ? country : null))
    
    const getLanguages = () => {
        let lgsGroup = []
        for(let i in countryInfo.languages) {
            lgsGroup.push(countryInfo.languages[i])
        }
        return lgsGroup
    }

    // Store the languages as an array
    const langs = getLanguages()

  return (
    <section className='countryPage--section'>
        <button type='button' onClick={handleClickCard} className='close--Btn'>
                <IoMdClose/>
        </button>
        <div className='country--name-container'>
            
            <div className= {`flag--img ${countryInfo.name.common !== "Nepal" ? "flag--img" : ""}` }>
                <img src={countryInfo.flags.png} alt='flag' />
            </div>
            <h2>{countryInfo.name.common}</h2>
        </div>
        
        <div className='country--info'>
            <ul className='country--info--list'>
                <li>
                    <h3>Population</h3>
                    <h4>{Intl.NumberFormat('en-US').format(countryInfo.population)}</h4>
                </li>
                <li>
                    <h3>Capital</h3>
                    <div>
                        { countryInfo.capital !== undefined && countryInfo.capital.map((capital,i) => {
                        
                            return (
                                <h4 key={i}>{capital !== undefined ? capital : "None"} </h4>
                            )
                        })}
                    </div>
                </li>
                <li>
                    <h3>Language</h3>
                    <ul>
                        {langs.map((language, i) => {
                            return (
                                <li key={i}>
                                    <h4>{language}</h4>
                                </li>
                            )
                         })}
                    </ul>
                </li>
                <li>
                    <h3>Continent</h3>
                    <h4>{ countryInfo.region}</h4>
                </li>
            </ul>
        </div>

    </section>
  )
}

export default CountryPage