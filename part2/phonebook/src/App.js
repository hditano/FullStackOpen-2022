import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import FilterForm from './components/FilterForm'
import axios from 'axios';
  

const App = () => {

  const urlPost = 'http://localhost:3001/persons';

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
         .then((response) => {
          setPersons(response.data)
          setSearchFilter(response.data)
         })
  }, [])

  useEffect(() => {
    console.log('')
  }, [persons])


const handleChangeName = (e) => {
  e.preventDefault();
  setNewName(e.target.value)
}

const handleChangeNumber = (e) => {
  e.preventDefault();
  setNewNumber(e.target.value)
}

const handleFilter = (e) => {
  e.preventDefault();
  setNewFilter(e.target.value);

}


const submitNote = (e) => {

  e.preventDefault();

  for(let i = 0; i < persons.length; i++) {
  
    const newNote = {
      name: newName,
      number: newNumber
    }

    const equalityName = (ele) => ele.name === newName;

    if(persons.some(equalityName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('');
      setNewNumber('');
      return;
    }

    axios.post(`${urlPost}`, newNote)
      .then((response) => {
        console.log(response)
      })

      setPersons(persons.concat(newNote))
      setSearchFilter(persons.concat(newNote));
      setNewName('');
      setNewNumber('');

    }
  }

  console.log(newName)


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm valueFilter={newFilter} changeFilter={handleFilter}/>
      <Form  valueName={newName} valueNumber={newNumber} changeName={handleChangeName} changeNumber={handleChangeNumber} addNote={submitNote}/>
      <h2>Numbers</h2>
      <Filter filterInput={newFilter} data={searchFilter}/>
    </div>
  )
}

export default App