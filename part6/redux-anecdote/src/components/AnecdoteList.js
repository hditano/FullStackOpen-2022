import { useDispatch, useSelector } from "react-redux"
import { SelectAllAnecdotes } from '../features/reducers/anecdoteReducer';
import { updateVote } from '../features/reducers/anecdoteReducer'
import { newMessage, removeMessage } from '../features/reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(SelectAllAnecdotes);
  const dispatch = useDispatch();


  const handleNotification = (id, content) => {
    dispatch(updateVote(id));
    dispatch(newMessage(`You liked note "${content}"`));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 5000)
  }

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
              <button onClick={() => handleNotification(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        )
      }
    </div>

  )

}

export default AnecdoteList;
