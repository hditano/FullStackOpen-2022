import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import {gql, useQuery} from '@apollo/client';


const ALL_AUTHORS = gql`
query {
  AllAuthors {
    id
    name
    born
    bookCount
  }
}
`

const App = () => {
  const [page, setPage] = useState('authors')


  const {data, error, loading} = useQuery(ALL_AUTHORS);
  if(loading) {
    return <div>loading...</div>
  }

  console.log(data.AllAuthors);

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors authors={data.AllAuthors} show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App
