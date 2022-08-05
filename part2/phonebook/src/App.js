import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import FilterForm from './components/FilterForm'
  

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [searchFilter, setSearchFilter] = useState(persons);


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

      setPersons(persons.concat(newNote))
      setSearchFilter(persons.concat(newNote));
      setNewName('');
      setNewNumber('');

    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm valueFilter={newFilter} changeFilter={handleFilter}/>
      <Form valueName={newName} valueNumber={newNumber} changeName={handleChangeName} changeNumber={handleChangeNumber} submitNote={submitNote}/>
      <h2>Numbers</h2>
      <Filter filterInput={newFilter} data={searchFilter}/>
    </div>
  )
}

export default App