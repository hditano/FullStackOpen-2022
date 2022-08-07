import { useEffect, useState } from 'react';
import RenderData from './components/RenderData';
import Form from './components/Form';
import FilterForm from './components/FilterForm';
import ServerData from './services/ServerData';

  

const App = () => {


  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    ServerData.getPerson()
      .then((response) =>{
        setPersons(response.data)
      })
  }, [])


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

  
    const newNote = {
      name: newName,
      number: newNumber
    }


    ServerData.createPerson(newNote)
      .then((response) => {
          setPersons(persons.concat(response.data))
          setNewName('');
          setNewNumber('');
    
      })
      // setPersons(persons.concat(newNote))
      // setSearchFilter(persons.concat(newNote));
      // setNewName('');
      // setNewNumber('');

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm valueFilter={newFilter} changeFilter={handleFilter}/>
      <Form  valueName={newName} valueNumber={newNumber} changeName={handleChangeName} changeNumber={handleChangeNumber} addNote={submitNote}/>
      <h2>Numbers</h2>
      <RenderData filterInput={newFilter} data={persons}/>
    </div>
  )
}

export default App