import './index.css'
import {useState, useEffect, useMemo} from 'react';
import { MyContext } from './MyContext';
import HomePage from './Pages/initialPage/initialPage';

function App() {
  const [countriesData, setCountriesData] = useState([])

  useMemo(() => setCountriesData, [countriesData])

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all"
    const getApiData = async () => {
      const response = await fetch(`${URL}`)
      const data = await response.json()

      setCountriesData(() => data)
  
  }
      getApiData()
      
    
    return () => {}
  }, [])
  
  return (
    <MyContext.Provider value={{countriesData, setCountriesData}}>
      <div className="App">
          <HomePage/>
      </div>
    </MyContext.Provider>
    
  );
}

export default App;
