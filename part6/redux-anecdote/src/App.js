import { useSelector, useDispatch } from 'react-redux'
import { voteDispatch, newNoteDispatch } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteDispatch(id))
  }

  const newNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(newNoteDispatch(content));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => a.votes < b.votes ? 1 : -1) && anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newNote}>
        <div><input name='note' /></div>
        <button >create</button>
      </form>
    </div>
  )
}

export default App
