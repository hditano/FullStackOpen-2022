import {useState} from 'react';
import {useMutation, gql, useQuery} from '@apollo/client';
import { ALL_AUTHORS } from '../queries/graphql-query';
import { CHANGE_BORN } from '../queries/graphql-query';

const Authors = (props) => {

  const [name, setName] = useState('');
  const [born, setBorn] = useState('');

  const results = useQuery(ALL_AUTHORS);
  const [changeBorn] = useMutation(CHANGE_BORN, {
    refetchQueries: [{query: ALL_AUTHORS}],
  });



  if (!props.show) {
    return null
  }

  const handleClick = (e) => {
    e.preventDefault();
    changeBorn({variables: {name, born: parseInt(born)}})

    setBorn('');
    setName('');
  }


  let authors = results.data.AllAuthors;


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
          {authors.map((a) => (
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
        <select onChange={(e) => setName(e.target.value)}>
          {authors.map((ele) => {
            return <option key={ele.id} value={ele.name}>{ele.name}</option>
          })}
        </select>
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
