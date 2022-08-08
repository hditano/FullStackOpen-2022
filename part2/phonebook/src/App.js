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


  // event handlers

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


// delete handler

const deletePerson = (id) => {
  const personToDel = persons.find(person => person.id === id)
  if(window.confirm(`Do you want to delete ${personToDel.name}`)) {
  ServerData.deletePerson(id)
    .then(() => {
      const newlist = persons.filter(ele => ele.id !== id)
      setPersons(newlist);
     }
    )

    updateList()
  }
}


// update list function to force-rerendering after delete

const updateList = () => {
  ServerData.getPerson()
  .then(response => {
   setPersons(response.data)
  })
}


// submit person function

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

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm valueFilter={newFilter} changeFilter={handleFilter}/>
      <Form  valueName={newName} valueNumber={newNumber} changeName={handleChangeName} changeNumber={handleChangeNumber} addNote={submitNote}/>
      <h2>Numbers</h2>
      <RenderData deletePerson={deletePerson} filterInput={newFilter} data={persons}/>
    </div>
  )
}

export default App