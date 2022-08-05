import { useState } from 'react'

const Filter = ({data, filterInput}) => {
  
  return data.filter(ele => {
    return ele.name.toLowerCase().includes(filterInput)
  }).map(ele => {
    return (
      <>
        <p>{ele.name} || {ele.number}</p>
      </>
    )
  })
  
  

}
  

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
      Filter shown with : <input value={newFilter} onChange={handleFilter}/>
      <div>debug: {newFilter}</div>
      <form onSubmit={submitNote}>
        <div>
          <h2>Add a new</h2>
          name: <input value={newName} onChange={handleChangeName}/>
          <br></br>
          number: <input value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Filter filterInput={newFilter} data={searchFilter}/>
    </div>
  )
}

export default App