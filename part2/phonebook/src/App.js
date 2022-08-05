import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '111-222-333'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


const handleChangeName = (e) => {
  e.preventDefault();
  setNewName(e.target.value)
}

const handleChangeNumber = (e) => {
  e.preventDefault();
  setNewNumber(e.target.value)
}

const submitNote = (e) => {

  e.preventDefault();

  for(let i = 0; i < persons.length; i++) {
    
    const equalityName = (ele) => ele.name === newName;

    const newNote = {
      name: newName,
      number: newNumber
    }


    if(persons.some(equalityName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('');
      setNewNumber('');
      return;
    }

      setPersons(persons.concat(newNote))
      setNewName('');
      setNewNumber('');

    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitNote}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
          <br></br>
          number: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      {persons.map((ele) => {
        return (
          <>
            <p key={ele.name}>{ele.name} {ele.number}</p>
          </>
        )
      })}
    </div>
  )
}
  

export default App