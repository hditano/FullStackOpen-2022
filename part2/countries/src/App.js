import axios from 'axios';
import {useEffect, useState} from 'react';
import Form from './components/Form';
import RenderData from './components/RenderData'
import WeatherAPI from './components/WeatherAPI';


const App = () => {

  const [DataCountries, setDataCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setDataCountries(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`)
      .then((response) => {
        setWeather(response.data)
      })
  }, [api_key])


  const handleCountry = (e) => {
    setSearchCountries(e.target.value)
  }

  const handleInfo = (e) => {
    e.preventDefault();
    console.log('clicked')
    console.log(showInfo)
    setShowInfo(!showInfo);
  }


  return (
    <div>
      <h1>Test</h1>
      <Form handleCountry={handleCountry} searchCountries={searchCountries}/>
      <RenderData showInfo={showInfo} handleInfo={handleInfo} DataCountries={DataCountries} searchCountries={searchCountries}/>
      <WeatherAPI weather={weather}/>
    </div>
  )
}

export default App