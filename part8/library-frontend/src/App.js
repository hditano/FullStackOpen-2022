import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import {gql, useMutation, useQuery} from '@apollo/client';


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

const ALL_BOOKS = gql`
query {
  AllBooks {
    title
    published
    genres
    id
    author {
      id
      name
      born
    }
  }
  }
`


const App = () => {
  const [page, setPage] = useState('authors');

  const AllBooks = useQuery(ALL_BOOKS);
  const {data, error, loading} = useQuery(ALL_AUTHORS, {pollInterval: 2000});
  if(loading) {
    return <div>loading...</div>
  }

  console.log(AllBooks.data)

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors show={page === 'authors'} />

      <Books books={AllBooks.data.AllBooks} show={page === 'books'} />

      <NewBook  show={page === 'add'} />
    </div>
  )
}

export default App
