import { useDispatch, useSelector } from "react-redux"
import { SelectAllAnecdotes } from '../features/reducers/anecdoteReducer';
import { updateVote } from '../features/reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(SelectAllAnecdotes);
  const dispatch = useDispatch();

  return (
    <div>
      {
        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => dispatch(updateVote(anecdote.id))}>vote</button>
            </div>
          </div>
        )
      }
    </div>

  )

}

export default AnecdoteList;
