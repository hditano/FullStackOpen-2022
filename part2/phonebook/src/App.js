import { useEffect, useState } from 'react';
import RenderData from './components/RenderData';
import Form from './components/Form';
import FilterForm from './components/FilterForm';
import ServerData from './services/ServerData';

import FindService from './services/FindInfoPerson';


  

const App = () => {

  const style = {
    backgroundColor: 'lightGrey',
    width: 800,
    height: 100,
    fontSize: 30,
    display: 'flex',
    margin: 20,
    justifyContent: 'center',
    borderRadius: 20,
    color: 'green'

  }


  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMesagge] = useState('');

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
     })
     .catch(error => {
      showMessageError(`cannot delete ${personToDel.name} with error ${error}`)
     })

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

// update person

const updatePerson = (checkPerson) => {

  if(checkPerson) {
    window.confirm(`${checkPerson.name} already exists on the phonebook. Do you want to change the number?`)

    const getID = FindService.FindID(checkPerson.name, persons)

    const updatePerson = {
      ...checkPerson,
      number: newNumber
    }


    ServerData.editPerson(getID, updatePerson)
      .then((response) => {
        const newList = persons.map(ele => ele.id !== getID ? checkPerson : response.data);
        setPersons(newList);
        setNewName('');
        setNewNumber('')
      })
      .catch(error => {
        showMessageError(`${checkPerson} with ${error} we were not able to update it`);
      })
      updateList()
  }
  
}


// submit person function

const submitNote = (e) => {

  e.preventDefault();

  const checkPerson = persons.find(ele => ele.name === newName);

  if(checkPerson) {
    updatePerson(checkPerson)
  } else {


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
      .catch(error => {
        showMessageError(`Error ${error} we were no able to add new person`);
      })
      .finally(() => {
        showMessageSucc('Person Added')
      })

  }
}

const showMessageError = (message) => {
  setErrorMessage(message);
  setTimeout(() => {
    setErrorMessage(null)
  }, 5000)
}

const showMessageSucc = (message) => {
  setErrorMessage(message);
  setTimeout(() => {
    setErrorMessage(null)
  }, 5000)
}


  return (
    <div>
      <h2>Phonebook</h2>
      <div style={style}>
        <p>{errorMessage}</p>
        <p>{successMessage}</p>
      </div>
      <FilterForm valueFilter={newFilter} changeFilter={handleFilter}/>
      <Form  valueName={newName} valueNumber={newNumber} changeName={handleChangeName} changeNumber={handleChangeNumber} addNote={submitNote}/>
      <h2>Numbers</h2>
      <RenderData deletePerson={deletePerson} filterInput={newFilter} data={persons}/>
    </div>
  )
}


export default App