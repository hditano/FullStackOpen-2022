import {useState} from 'react';
import {useMutation, gql} from '@apollo/client';


const CHANGE_BORN = gql`
mutation changeBorn($name: String!, $born: Int!) {
  editAuthor(
    name: $name,
    born: $born,
  ) {
    name
    born
  }
}
`

const Authors = (props) => {

  const [name, setName] = useState('');
  const [born, setBorn] = useState('');

  const [changeBorn] = useMutation(CHANGE_BORN);



  if (!props.show) {
    return null
  }

  const handleClick = async (e) => {
    e.preventDefault();
    changeBorn({variables: {name, born: parseInt(born)}})

    setBorn('');
    setName('');
  }



  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {props.authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <form onSubmit={handleClick}>
        <h2>Set birthyear</h2>
        <label>Name: </label>
        <input value={name} type='text' onChange={(e) => setName(e.target.value)}/>
        <br></br>
        <label>Born: </label>
        <input value={born} type='text' onChange={(e) => setBorn(e.target.value)} />
        <br></br>
        <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authors
