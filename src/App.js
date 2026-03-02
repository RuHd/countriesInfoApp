import './index.css'
import {useState, useEffect} from 'react';
import { MyContext } from './MyContext';
import HomePage from './Pages/initialPage/initialPage';

function App() {

  const [countriesData, setCountriesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const URL = "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,languages,currencies"
    const getApiData = async () => {

      try {
        const response = await fetch(`${URL}`)
        const data = await response.json()

        setCountriesData(() => data)
        setIsLoading(false)

      }

      catch (error) {

        console.log(error)
      } 

  }
      getApiData()
      
      return () => {}
  }, [])
  
  return (
    <MyContext.Provider value={{countriesData, setCountriesData}}>
      <div className="App">
          <HomePage isLoading={isLoading}/>
      </div>
    </MyContext.Provider>
    
  );
}

export default App;
