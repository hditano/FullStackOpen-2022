import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas' 
    }
  ]) 
  const [newName, setNewName] = useState('')

const handleChange = (e) => {
  e.preventDefault();
  setNewName(e.target.value)
}

const submitNote = (e) => {
  e.preventDefault();
  const newNote = {
    name: newName
  }

  setPersons(persons.concat(newNote))
  setNewName('');
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitNote}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
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
            <p key={ele.name}>{ele.name}</p>
          </>
        )
      })}
    </div>
  )
}

export default App