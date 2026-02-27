import './index.css'
import {useState, useEffect, useMemo} from 'react';
import { MyContext } from './MyContext';
import HomePage from './Pages/initialPage/initialPage';

function App() {
  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,languages,currencies"
    const getApiData = async () => {
      try {
        const response = await fetch(`${URL}`)
        const data = await response.json()


        setCountriesData(() => data)

      }

      catch (error) {

        console.log(error)
      } 

  }
      getApiData()
      
      return () => {}
  }, [countriesData])
  
  return (
    <MyContext.Provider value={{countriesData, setCountriesData}}>
      <div className="App">
          <HomePage/>
      </div>
    </MyContext.Provider>
    
  );
}

export default App;
