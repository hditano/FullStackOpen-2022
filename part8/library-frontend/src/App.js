import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import { ALL_AUTHORS } from './queries/graphql-query'
import { ALL_BOOKS } from './queries/graphql-query'
import {gql, useApolloClient, useMutation, useQuery, useSubscription} from '@apollo/client';
import {ADDED_BOOK} from './queries/graphql-query';


const App = () => {
  const [page, setPage] = useState('authors');
  const [token, setToken] = useState(null);
  const client = useApolloClient();

  useSubscription(ADDED_BOOK, {
    onSubscriptionData: ({subscriptionData}) => {
      console.log(subscriptionData)
    }
  })

  const AllBooks = useQuery(ALL_BOOKS);
  const {data, error, loading} = useQuery(ALL_AUTHORS, {pollInterval: 2000});
  if(loading) {
    return <div>loading...</div>
  }

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {token ? 
        <button onClick={() => setPage('add')}>add book</button>
        : ''}
        <button onClick={() => setPage('login')}>{token ? 'Logout' : 'Login'}</button>
      </div>

      <Authors show={page === 'authors'} />

      <Books books={AllBooks.data.AllBooks} show={page === 'books'} />

      <NewBook  show={page === 'add'} />

      <Login setToken={setToken} show={page === 'login'} />
    </div>
  )
}

export default App
