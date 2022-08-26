import { useSelector, useDispatch } from 'react-redux'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch({
      type: 'updateVote',
      payload: {
        id: id,
      }
    })
  }

  const newNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch({
      type: 'newNote',
      payload: {
        content,
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
