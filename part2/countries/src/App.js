import axios from 'axios';
import {useEffect, useState} from 'react';
import Form from './components/Form';
import RenderData from './components/RenderData'


const App = () => {

  const [DataCountries, setDataCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setDataCountries(response.data)
      })
  }, [])
  
  const submitCountry = (e) => {
    console.log('clicked');
  }

  const handleCountry = (e) => {
    setSearchCountries(e.target.value)
  }

  const handleData = (e) => {
    e.preventDefault();
    console.log(DataCountries)
  }

  return (
    <div>
      <h1>Test</h1>
      <Form submitCountry={submitCountry} handleCountry={handleCountry} searchCountries={searchCountries} handleData={handleData}/>
      <RenderData DataCountries={DataCountries} searchCountries={searchCountries}/>
    </div>
  )
}

export default App