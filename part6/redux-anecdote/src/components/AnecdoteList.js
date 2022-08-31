import { useDispatch, useSelector } from "react-redux"
import { SelectAllAnecdotes } from '../features/reducers/anecdoteReducer';
import { SelectAllFilters } from '../features/reducers/filterReducer';
import { updateVote } from '../features/reducers/anecdoteReducer'
import { newMessage, removeMessage, setupNotification } from '../features/reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(SelectAllAnecdotes);
  const filter = useSelector(SelectAllFilters);
  const dispatch = useDispatch();


  const handleNotification = (id, content) => {
    dispatch(updateVote(id));
    dispatch(setupNotification(`You voted ${content}`, 5));
  }

  const handleList = () => {
    if (filter === '') {
      return anecdotes
    }
    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <div>
      {handleList()
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleNotification(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )
      }
    </div>

  )

}

export default AnecdoteList;
